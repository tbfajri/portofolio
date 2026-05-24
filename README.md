# Portfolio - Tb Fajri Mulyana

Website portfolio statis untuk menampilkan pengalaman, proyek AI, proyek pribadi, dan proyek kantor.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript

## Struktur Folder

```text
.
├── index.html
├── README.md
├── AI-Engineer-Portfolio-Master-Planning.md
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── script.js
    ├── docs
    │   └── CV-Tb-Fajri-Mulyana-ATS-Professional-(2).pdf
    └── images
        ├── finetune-*.png|jpeg
        ├── vibe-*.png
        ├── pasnet-*.png
        ├── aso-*.png
        ├── telemedicine-*.png
        └── ...
```

## Menjalankan Secara Lokal
Karena ini project statis, bisa langsung dibuka:
1. Buka `index.html` di browser.

Rekomendasi (agar path dan cache lebih stabil):
1. Jalankan local server sederhana, contoh:
   - `python3 -m http.server 5500`
2. Buka `http://localhost:5500`

## Fitur Utama
- Bilingual konten (`ID/EN`) via atribut `data-i18n-id` dan `data-i18n-en`
- Sidebar portfolio yang bisa klik langsung ke card terkait
- Image slider pada tiap showcase
- Modal preview gambar portfolio
- Layout responsif untuk desktop dan mobile

## Cara Menambah Proyek/Gambar
1. Simpan gambar ke `assets/images/`.
2. Tambahkan card/slider di `index.html` pada section portfolio.
3. Jika ingin bisa dibuka di modal, pastikan `<img>` memiliki atribut:
   - `data-modal-category-id`
   - `data-modal-category-en`
   - `data-modal-title-id`
   - `data-modal-title-en`
   - `data-modal-description-id`
   - `data-modal-description-en`
4. Jika menambah teks bilingual, isi kedua atribut:
   - `data-i18n-id`
   - `data-i18n-en`

## Deployment
Bisa di-deploy ke:
- GitHub Pages
- Netlify
- Vercel

Cukup arahkan ke root project dengan entry file `index.html`.

## Repository
Remote GitHub:
- `git@github.com:tbfajri/portofolio.git`
