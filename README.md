# 🛍️ NovaStore E-Ticaret Stok Yönetim Paneli

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, **NovaStore** e-ticaret platformunun depo ve ürün yönetimini simüle eden bir **CRUD (Create, Read, Update, Delete)** uygulamasıdır. 

Uygulama, gerçek bir veritabanı bağlantısı kurulana kadar verilerin kaybolmaması için tarayıcının **Local Storage** mimarisini kullanmaktadır.

## ✨ Öne Çıkan Özellikler
- **Tam Kapsamlı CRUD:** Yeni ürün ekleme, mevcut ürünleri listeleme, stok/fiyat güncelleme ve silme işlemleri.
- **Kalıcı Veri (Local Storage):** Sayfa yenilense dahi veriler tarayıcı önbelleğinde güvenle tutulur ve 20 adet başlangıç verisi (Seed Data) ile birlikte gelir.
- **Anlık Arama ve Filtreleme:** Vue'nun reaktif `computed` yapısı sayesinde ürünler ve kategoriler arasında anında (real-time) arama yapılabilir.
- **Modern ve Ferah Arayüz:** Tailwind CSS kullanılarak, günümüz tasarım trendlerine uygun, canlı renk geçişlerine ve cam efektine (Glassmorphism) sahip UI/UX tasarımı uygulanmıştır.
- **Bileşen (Component) Mimarisi:** Proje; okunabilirliği artırmak için Form, Liste ve Ana Sayfa olarak modüler bileşenlere ayrılmıştır.

## 🛠️ Kullanılan Teknolojiler
- **Framework:** Vue 3 (Composition API)
- **Derleyici (Bundler):** Vite
- **Stil & UI:** Tailwind CSS
- **Veri Yönetimi:** JavaScript Local Storage API

## 📂 Proje Mimarisi
Proje, standartlarına uygun olarak aşağıdaki dizin yapısında kurgulanmıştır:
- `/src/Pages` : Ana sayfa ve genel yerleşim (Dashboard.vue)
- `/src/Components` : Parçalanmış modüler yapılar (ProductForm.vue, ProductList.vue)
- `/src/Interfaces` : Veri tabanı (Local Storage) iletişim katmanı (storage.js)
