# WABA Customer Care Prototype

Prototype interaktif aplikasi Customer Care WhatsApp Business API (WABA) berbasis web menggunakan React 18, Tailwind CSS, dan Babel Standalone CDN. Dirancang dengan Dasaria Design System bernuansa clean modern.

---

## 🚀 Fitur Utama

- **Customer Care Chats (WhatsApp Web UX)**:
  - Antarmuka chat room dua arah dengan doodle background dan layout pesan khas WhatsApp.
  - Bubble chat khusus Customer Care (hijau muda dengan double-check status) dan customer (putih rapi).
  - Quick message picker (Template Chat popup).
  - Input field modern dengan shortcut `Enter` untuk mengirim pesan.
  - Pencarian nomor/pesan dan filter multi-kategori (Semua, Belum Dibaca, KiosNet, GriyaNet, Label).
- **Collapsible Navigation Sidebar**:
  - Mode penuh (`w-64`) dan mode mini (`w-[68px]`) dengan toggle tombol hamburger di top navbar.
  - Menu terkelompok rapi:
    - **Umum**: Chats, Tag & Label, Template Chat.
    - **Data Pelanggan**: User, Service / Layanan, Contact.
  - Profile card operator dan tombol Logout dengan dialog konfirmasi.
- **Manajemen Data & Master**:
  - **User**: Pengelolaan master pelanggan (NIK, alamat, status verifikasi).
  - **Service**: Monitoring akun PPPOE, bandwidth/paket, status koneksi (Active, Isolir, Terminated), OLT Rx/ONU Rx, dan pemetaan primary contact (aturan CR-12: 1 nomor primary per layanan).
  - **Contact**: Manajemen relasi kontak pelanggan dan pencocokan otomatis layanan (*match service*).
  - **Tag & Label**: Kustomisasi label percakapan berwarna untuk penandaan prioritas.
  - **Template Chat**: Template respons cepat standar operasional CS.
- **Theme Support**:
  - Dukungan mode Terang (Light) dan Gelap (Dark).
- **Indikator Realtime**:
  - Status pill koneksi realtime di top header navbar.

---

## 🛠️ Tech Stack

- **Framework / UI Library**: [React 18](https://react.dev/) (UMD via CDN)
- **Styling**: [Tailwind CSS CDN](https://tailwindcss.com/) + CSS Variables
- **Icons**: FontAwesome 6 & Lucide-style SVG Glyphs
- **Compiler**: Babel Standalone (JSX support langsung di browser)

---

## 💻 Cara Menjalankan

Aplikasi ini bersifat standalone tanpa memerlukan build tools atau `npm install`:

1. Clone repositori ini:
   ```bash
   git clone https://github.com/Kamen-Rider-Busdev/Prototype-WABA.git
   ```
2. Buka file `index.html` langsung di browser Anda (Google Chrome, Edge, Safari, Firefox), atau gunakan ekstensi live server:
   ```bash
   # Contoh via python HTTP server lokal:
   python3 -m http.server 8000
   ```
3. Akses via URL `http://localhost:8000`.

---

## 📄 Struktur Berkas

```text
Prototype-WABA/
├── index.html           # File utama aplikasi prototype WABA
├── index-v1.html        # Versi legacy / baseline prototype WABA
└── README.md            # Dokumentasi proyek
```
