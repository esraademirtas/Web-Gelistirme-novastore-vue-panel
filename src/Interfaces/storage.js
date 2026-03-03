// src/Interfaces/storage.js
// ProjemiN veritabanı simülasyonu: LocalStorage işlemleri

const STORAGE_KEY = 'novastore_products';

//Seed Data
const initialProducts = [
  { id: 101, name: 'Geliştirici Laptop Pro', category: 'Elektronik', price: 45000, stock: 15 },
  { id: 102, name: 'Akıllı Telefon Ultra', category: 'Elektronik', price: 32000, stock: 40 },
  { id: 103, name: 'Gürültü Engelleyici Kulaklık', category: 'Elektronik', price: 4500, stock: 25 },
  { id: 104, name: 'Akıllı Saat Series 8', category: 'Elektronik', price: 9500, stock: 30 },
  { id: 105, name: '4K Ultra HD Monitör', category: 'Elektronik', price: 8500, stock: 12 },
  
  { id: 106, name: 'Kışlık Kaşe Mont', category: 'Giyim', price: 3200, stock: 20 },
  { id: 107, name: 'Su Geçirmez Outdoor Bot', category: 'Giyim', price: 2800, stock: 35 },
  { id: 108, name: 'Pamuklu Basic Tişört', category: 'Giyim', price: 350, stock: 100 },
  { id: 109, name: 'Spor Yürüyüş Ayakkabısı', category: 'Giyim', price: 1800, stock: 45 },
  { id: 110, name: 'Deri Evrak Çantası', category: 'Giyim', price: 1500, stock: 10 },
  
  { id: 111, name: 'Ergonomik Çalışma Sandalyesi', category: 'Ev ve Yaşam', price: 4500, stock: 18 },
  { id: 112, name: 'LED Masa Lambası', category: 'Ev ve Yaşam', price: 850, stock: 50 },
  { id: 113, name: 'Ortopedik Visco Yastık', category: 'Ev ve Yaşam', price: 600, stock: 60 },
  { id: 114, name: 'Akıllı Robot Süpürge', category: 'Ev ve Yaşam', price: 12500, stock: 8 },
  { id: 115, name: 'Seramik Kahve Fincan Seti', category: 'Ev ve Yaşam', price: 450, stock: 22 },
  
  { id: 116, name: 'Veri Bilimi ve Makine Öğrenmesi', category: 'Kitap', price: 450, stock: 70 },
  { id: 117, name: 'Temiz Kod (Clean Code)', category: 'Kitap', price: 380, stock: 85 },
  { id: 118, name: 'Modern Web Geliştirme', category: 'Kitap', price: 420, stock: 55 },
  
  { id: 119, name: 'Nemlendirici Gece Kremi', category: 'Kozmetik', price: 850, stock: 40 },
  { id: 120, name: 'Odunsu Erkek Parfümü 100ml', category: 'Kozmetik', price: 1600, stock: 28 }
];

export const getProducts = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  
  // Eğer daha önce veri kaydedilmişse onu getir
  if (data && JSON.parse(data).length > 0) {
    return JSON.parse(data);
  } else {
    // Eğer Local Storage tamamen boşsa
    // Örnek 20 ürünü yükle ve geri döndür.
    saveProducts(initialProducts);
    return initialProducts;
  }
};

export const saveProducts = (products) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};