# 🌟 UAS-PEMSIK_F

Selamat datang di proyek UAS-PEMSIK_F! Repositori ini berisi komponen backend dan frontend dari aplikasi. Ikuti instruksi di bawah ini untuk memulai.

## 📦 Daftar Isi
- [Memulai](#memulai)
- [Pengaturan Backend](#pengaturan-backend)
- [Pengaturan Frontend](#pengaturan-frontend)
- [Instalasi ReactJS](#instalasi-reactjs)
- [Ikon](#ikon)

## 🚀 Memulai

Untuk menjalankan proyek ini, Anda perlu menyiapkan backend dan frontend. Pastikan Anda telah menginstal alat yang diperlukan:

- [Go](https://golang.org/dl/)
- [Node.js](https://nodejs.org/)

## 🖥️ Pengaturan Backend

1. **Navigasi ke Direktori Backend:**
   ```bash
   cd be
   ```

2. **Jalankan Server Backend:**
   ```bash
   go run main.go
   ```

   Server backend Anda sekarang seharusnya sudah berjalan!

## 🌐 Pengaturan Frontend

1. **Navigasi ke Direktori Frontend:**
   ```bash
   cd fe
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan Frontend:**
   ```bash
   npm run dev
   ```

   Aplikasi frontend Anda sekarang seharusnya dapat diakses di browser!

## 📦 Instalasi ReactJS

### Step 1
Buat aplikasi React baru menggunakan Vite:
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
```

### Step 2
Instal Tailwind CSS dan inisialisasi:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Step 3
Inisialisasi Tailwind CSS dengan PostCSS:
```bash
npx tailwindcss init -p
```

### Step 4
Instal dependensi tambahan:
```bash
npm install react-router-dom lucide-react
npm install react-dom
npm run dev
```

### Opsional
Instal SweetAlert2 untuk notifikasi:
```bash
npm install sweetalert2
```

## 🛠️ Konfigurasi Tailwind CSS

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### App.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
