# Module System

- Reusability

  - Modul bisa digunakan kembali oleh bagian program lain atau bisa menjadi package untuk app lain.

- Isolation

  - Satu modul mengerjakan hanya hal yang spesifik saja.

- Organization

  - Kemudahan pengelolaan aplikasi secara keseluruhan.

## No Modules (sebelum ada module)

- Harus membuat fungsi pembungkus / wrapper function
- Agar memiliki scope, sehingga tidak ada global variable
- Tetap muncul function wrapper yang bisa diakses secara global
- Kurang reusable
- Masalah pengelolaan dependency

## IIFE (Immediately Invoked Function Expression)

- Tidak perlu membuat nama function
- Tidak perlu menjalankan function
- Tidak ada function yang bisa diakses secara global
- Harus ditulis di setiap module
- Masih bukan module system

## CommonJS (Module formatting system)

- Menggunakan keyword module.exports dan require()
- Diterapkan di dalam nodeJS
- Butuh module bundler jika ingin dijalankan di browser

## ES6 Module (ECMAScript Harmony)

- Menggunakan keyword exports dan import
- Asynchronous
- Tidak butuh module bundler jika ingin dijalankan di browser
- Tambahkan type="module" saat pemanggilan script
