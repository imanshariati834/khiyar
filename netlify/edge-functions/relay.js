const KHIYARPoint = (Netlify.env.get("THE_KHIYAR") || "").replace(/\/$/, "");
const whats = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
]);
export default async function handler(request) {
  if (!KHIYARPoint) {
    return new Response("Misconfigured: THE_KHIYAR is not set", { status: 500 });
  }
  try {
    const url = new URL(request.url);
    const targetUrl = KHIYARPoint + url.pathname + url.search;
    const headers = new Headers();
    let clientIp = null;
    for (const [key, value] of request.headers) {
      const k = key.toLowerCase();
      if (whats.has(k)) continue;
      if (k.startsWith("x-nf-")) continue;
      if (k.startsWith("x-netlify-")) continue;
      if (k === "x-real-ip") {
        clientIp = value;
        continue;
      }
      if (k === "x-forwarded-for") {
        if (!clientIp) clientIp = value;
        continue;
      }
      headers.set(k, value);
    }
    if (clientIp) headers.set("x-forwarded-for", clientIp);
    const method = request.method;
    const hasBody = method !== "GET" && method !== "HEAD";
    const fetchOptions = {
      method,
      headers,
      redirect: "manual",
    };
    if (hasBody) {
      fetchOptions.body = request.body;
    }
    const upstream = await fetch(targetUrl, fetchOptions);
    const responseHeaders = new Headers();
    for (const [key, value] of upstream.headers) {
      if (key.toLowerCase() === "transfer-encoding") continue;
      responseHeaders.set(key, value);
    }
    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response("Bad Gateway: Relay Failed", { status: 502 });
  }
}
