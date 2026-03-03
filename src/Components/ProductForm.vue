<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  productToEdit: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['submit-product']);

const formData = ref({
  id: null,
  name: '',
  category: '',
  price: '',
  stock: ''
});

const resetForm = () => {
  formData.value = { id: null, name: '', category: '', price: '', stock: '' };
};

watch(() => props.productToEdit, (newVal) => {
  if (newVal) {
    formData.value = { ...newVal };
  } else {
    resetForm();
  }
}, { immediate: true });

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.price) {
    alert("Lütfen ürün adı ve fiyatını giriniz!");
    return;
  }
  emit('submit-product', { ...formData.value });
  resetForm();
};
</script>

<template>
  <div class="bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white">
    <h2 class="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
      {{ formData.id ? '✏️ Ürünü Güncelle' : '📦 Yeni Ürün Ekle' }}
    </h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div>
        <label class="block text-sm font-bold text-slate-600 mb-1">Ürün Adı</label>
        <input v-model="formData.name" type="text" class="w-full rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 p-3 shadow-sm transition" placeholder="Örn: Akıllı Telefon">
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-bold text-slate-600 mb-1">Kategori</label>
          <input v-model="formData.category" type="text" class="w-full rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 p-3 shadow-sm transition" placeholder="Örn: Elektronik">
        </div>
        <div>
          <label class="block text-sm font-bold text-slate-600 mb-1">Stok Adedi</label>
          <input v-model="formData.stock" type="number" class="w-full rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 p-3 shadow-sm transition" placeholder="Örn: 50">
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold text-slate-600 mb-1">Fiyat (TL)</label>
        <input v-model="formData.price" type="number" class="w-full rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 p-3 shadow-sm transition" placeholder="Örn: 15000">
      </div>

      <div class="pt-4">
        <button type="submit" class="w-full bg-gradient-to-r from-rose-500 to-indigo-600 text-white py-3 px-4 rounded-xl shadow-lg shadow-rose-200/50 hover:shadow-rose-300/60 transition-all font-bold text-lg transform hover:-translate-y-1">
          {{ formData.id ? 'Değişiklikleri Kaydet' : 'Ürünü Ekle' }}
        </button>
      </div>
    </form>
  </div>
</template>