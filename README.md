# Crypto Dashboard 🚀

Crypto Dashboard adalah proyek berbasis **Svelte** yang memungkinkan pengguna untuk melihat harga **Bitcoin & Ethereum** secara real-time dalam bentuk grafik interaktif. Data harga diperbarui otomatis setiap **10 detik** menggunakan API dari **CoinGecko**.

Proyek ini dibuat untuk membantu orang awam dalam **memantau harga crypto** dengan cara yang simpel dan mudah digunakan. Tidak perlu keahlian teknis tinggi, cukup ikuti langkah-langkah di bawah ini! ✅

---

## 🎯 Fitur

- ✅ **Menampilkan harga Bitcoin & Ethereum secara real-time** 📊  
- ✅ **Grafik harga yang interaktif** dengan Chart.js 📈  
- ✅ **Update harga otomatis setiap 10 detik** 🔄  
- ✅ **Desain responsif**, bisa digunakan di HP maupun PC 📱💻  

---

## 📥 Instalasi & Menjalankan Proyek

### 1️⃣ **Pastikan Sudah Terinstall Node.js**
Sebelum mulai, pastikan di laptop/PC kamu sudah ada **Node.js**. Cek dengan perintah ini:
```sh
node -v
```
Jika belum ada, download dan install dari [sini](https://nodejs.org/).

---

### 2️⃣ **Clone Repo ini**
```sh
git clone https://github.com/username/svelte-crypto-dashboard.git
```
Ganti `username` dengan akun GitHub-mu. 

Lalu masuk ke folder proyek:
```sh
cd svelte-crypto-dashboard
```

---

### 3️⃣ **Install Dependencies**
Kita akan menggunakan **Vite** sebagai bundler proyek. Install semua package yang diperlukan dengan:
```sh
npm install
```

---

### 4️⃣ **Menjalankan Aplikasi**
Setelah semua terinstall, jalankan server dengan perintah:
```sh
npm run dev
```

Akan muncul output seperti ini:
```
Local: http://localhost:5173/
```
Buka **[http://localhost:5173/](http://localhost:5173/)** di browser untuk melihat Crypto Dashboard! 🎉

---

## 🛠️ Cara Kerja Aplikasi

### 💡 1. Mengambil Data Harga Crypto
Kita mengambil harga Bitcoin & Ethereum dari **CoinGecko API** di file `src/lib/api.js`.

### 💡 2. Menyimpan Data di Store
Kita menggunakan **Svelte Store (`writable`)** untuk menyimpan data harga agar bisa digunakan di seluruh komponen.

### 💡 3. Menampilkan Data dalam Grafik
Kita menggunakan **Chart.js** untuk membuat grafik harga yang interaktif di file `CryptoChart.svelte`.

### 💡 4. Update Otomatis Setiap 10 Detik
Menggunakan `setInterval()`, aplikasi akan mengambil data terbaru setiap **10 detik**.

---

## 📌 Kontributor
Jika ingin berkontribusi, silakan fork repo ini dan buat **pull request**! Semua bentuk kontribusi sangat diapresiasi. 😊

Jika ada pertanyaan atau masukan, jangan ragu untuk **buka issue** atau hubungi saya di GitHub.

**Selamat Coding! 🚀🔥**
