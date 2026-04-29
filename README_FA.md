# 🚀 ریلی Netlify (Edge Function)

> ⚡ یک پراکسی/ریلی سبک با استفاده از **Netlify Edge Functions**
> ساخته شده توسط **amirs**

---

## 🌐 دمو

```
https://your-site.netlify.app
```

---

## ✨ ویژگی‌ها

* ⚡ اجرای سریع روی Edge
* 🔁 انتقال کامل درخواست‌ها (Relay)
* 🌍 اجرا روی CDN نتلیفای
* 🔒 تنظیم دامنه با env
* 🧩 ساختار ساده و تمیز

---

## 📦 ساختار پروژه

```
.
├── netlify/
│   └── edge-functions/
│       └── relay.js
├── public/
│   └── index.html
├── netlify.toml
├── package.json
```

---

## ⚙️ متغیر محیطی (مهم)

باید این مقدار را تنظیم کنی:

```
TARGET_DOMAIN=https://example.com
```

---

## 🚀 دیپلوی از طریق سایت Netlify

1. برو به:
   https://app.netlify.com

2. گزینه:
   Add new project → Import from GitHub

3. ریپوی خودت را انتخاب کن

4. تنظیمات:

```
Build command: npm run build
Publish directory: public
```

5. متغیر محیطی اضافه کن:

```
TARGET_DOMAIN=https://دامنه-خودت.com
```

6. Deploy کن 🎉

---

## 💻 دیپلوی با CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## 🧪 تست

برو به:

```
https://your-site.netlify.app
```

درخواست‌ها به دامنه مقصد پاس داده می‌شوند

---

## 💰 حمایت مالی (Solana)

اگر این پروژه برات مفید بود:

```
E7S8EBUE5tkY5UaTgDvhaanJMeCi2DxPGYZukJGrJV8J
```

---

## 📢 کانال تلگرام

https://t.me/avaco_cloud

---

## 💬 ارتباط

تلگرام: @ShakerFPS

---

## ⚠️ نکات مهم

* فقط برای دامنه‌هایی که مالکشی استفاده کن
* استفاده نادرست ممکنه باعث بلاک شدن بشه

---

## 👤 سازنده

**amirs**

---

## 📜 لایسنس

MIT License © amirs
