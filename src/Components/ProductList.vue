<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['edit-product', 'delete-product']);

const searchQuery = ref('');

const filteredProducts = computed(() => {
  return props.products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    (p.category && p.category.toLowerCase().includes(searchQuery.value.toLowerCase()))
  );
});
</script>

<template>
  <div class="bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white">
    
    <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <h2 class="text-2xl font-extrabold text-slate-800 flex items-center gap-2">📋 Ürün Listesi</h2>
      <div class="w-full sm:w-1/2">
        <input v-model="searchQuery" type="text" placeholder="🔍 Ürün veya Kategori Ara..." class="w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 p-3 shadow-sm transition">
      </div>
    </div>

    <div class="overflow-x-auto rounded-xl border border-slate-100">
      <table class="min-w-full divide-y divide-slate-200">
        <thead class="bg-slate-50/50">
          <tr>
            <th class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Ürün Adı</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Kategori</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Stok</th>
            <th class="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Fiyat (TL)</th>
            <th class="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">İşlemler</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 bg-white">
          <tr v-if="filteredProducts.length === 0">
            <td colspan="5" class="px-6 py-8 text-center text-slate-500 font-medium">
              Henüz ürün eklenmemiş veya aramanıza uygun ürün bulunamadı.
            </td>
          </tr>
          <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-indigo-50/50 transition-colors duration-200">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">{{ product.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
              <span class="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-indigo-100 text-indigo-700">
                {{ product.category || 'Belirtilmedi' }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">{{ product.stock }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-rose-600 font-extrabold">{{ product.price }} ₺</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="emit('edit-product', product)" class="text-indigo-600 hover:text-indigo-800 mr-3 transition bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg">Düzenle</button>
              <button @click="emit('delete-product', product.id)" class="text-rose-600 hover:text-rose-800 transition bg-rose-50 hover:bg-rose-100 px-3 py-1 rounded-lg">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>