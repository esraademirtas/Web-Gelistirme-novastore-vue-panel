<script setup>
import { ref, onMounted } from 'vue';
import ProductForm from '../Components/ProductForm.vue';
import ProductList from '../Components/ProductList.vue';
import { getProducts, saveProducts } from '../Interfaces/storage.js';

const products = ref([]);
const productToEdit = ref(null);

onMounted(() => {
  products.value = getProducts();
});

const handleAddOrUpdate = (productData) => {
  if (productData.id) {
    const index = products.value.findIndex(p => p.id === productData.id);
    if (index !== -1) {
      products.value[index] = productData;
    }
  } else {
    productData.id = Date.now();
    products.value.push(productData);
  }
  saveProducts(products.value);
  productToEdit.value = null;
};

const handleEdit = (product) => {
  productToEdit.value = product;
};

const handleDelete = (id) => {
  if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
    products.value = products.value.filter(p => p.id !== id);
    saveProducts(products.value);
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-rose-50 via-fuchsia-50 to-indigo-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-7xl mx-auto">
      
      <div class="mb-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600 tracking-tight mb-4 drop-shadow-sm">
          🛍️ NovaStore E-Ticaret Stok Yönetimi
        </h1>
        <p class="text-lg text-slate-700 font-medium max-w-3xl mx-auto mb-2">
          Vue 3 ve Tailwind CSS kullanılarak geliştirilmiş modern bir <span class="text-indigo-600 font-bold">CRUD </span> uygulamasıdır.
        </p>
        <p class="text-sm text-slate-500 font-medium">
          * Local Storage entegrasyonu sayesinde eklediğiniz veriler tarayıcı önbelleğinde güvenle saklanır.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1">
          <ProductForm :productToEdit="productToEdit" @submit-product="handleAddOrUpdate" />
        </div>
        <div class="lg:col-span-2">
          <ProductList :products="products" @edit-product="handleEdit" @delete-product="handleDelete" />
        </div>
      </div>

    </div>
  </div>
</template>