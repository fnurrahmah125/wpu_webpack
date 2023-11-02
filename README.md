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

## Module Bundler

Sebuah tool yang mengambil code-code javascript yang kita gunakan (beserta dengan dependency-nya) dan mem-bundle/menggabungkannya menjadi sebuah file (biasanya untuk digunakan di browser).

### Fungsi:

- Melakukan penggabungan dan pengelolaan dependencies secara otomatis
- Melakukan minify/uglify terhadap file agar ukurannya menjadi semakin kecil

### Contoh:

- browserify.org
- webpack.js.org
- rollupjs.org
- parceljs.org
- snowpack.dev
- vitejs.dev

### Fitur Webpack:

- Dependency management
- Hot module replacement
- Caching
- Supported modules: ES Modules, CommonJS, AMD Modules

### Kelebihan Webpack:

- Transpile older JS
- Bundle CSS & Images
- Asset optimization
- Increase developer productivity & experience

### Komponen konfigurasi Webpack:

- Entry
- Output
- Mode
- Loaders
- Plugins
- Browser Compatibility

## Webpack Loaders

Melakukan bundle pada sumber daya statis selain javascript.

## Caching

Sebuah teknik untuk menyimpan data di dalam komponen hardware atau software, dilakukan agar request (berikutnya) untuk data tersebut terjadi dengan lebih cepat.

> hard refresh - Ctrl + Shift + R

### 📌 Useful Commits

- [Javascript Module System](https://github.com/fnurrahmah125/wpu_webpack/commit/4399abc63dfa73331aa423a7f96113e814d7237b)
- [Start using webpack](https://github.com/fnurrahmah125/wpu_webpack/commit/3f0a53ecdac822b1a2ca5d478d405eb9dd1e1798)
- [Webpack Custom Configuration](https://github.com/fnurrahmah125/wpu_webpack/commit/7019ee3bda61cabf014a3fefecca33f5d8345d72)
- [Loaders](https://github.com/fnurrahmah125/wpu_webpack/commit/a2cf73d917dba93e96242553d8ce14abba3ece45)
- [Plugin](https://github.com/fnurrahmah125/wpu_webpack/commit/d01503be4ce29bf00ea62f621a47d0e4f0f69b3e)
- [Assets Management](https://github.com/fnurrahmah125/wpu_webpack/commit/4eb1528d935594cd23bc9dbb7177e66b0e0210d4)
- [Code Splitting with Multiple Entry](https://github.com/fnurrahmah125/wpu_webpack/commit/04bc74d2ec4233b0532c940e4d62b02431ddd1b8)
- [Code Splitting with Prevent Duplication](https://github.com/fnurrahmah125/wpu_webpack/commit/b8ebdfb21e7da3552aee38f54aaa8f1f7f63f37b)\
- [CSS and Image Minimizer](https://github.com/fnurrahmah125/wpu_webpack/commit/1f0e7f64b1dddd28d869f6a5472eb032145659e9)
