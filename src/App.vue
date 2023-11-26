<script setup>
import { useProduct } from './composables'

const { products, limitSize, onLimitChange, name, onCategoryFilter, search, searchTitle } = useProduct()

</script>

<template>
  <!-- <section class="bg-wrapper">
    <nav class="container mx-auto flex items-center pt-5">
      <div class="flex ms-auto justify-between">
        <a class="mr-3" href="/">Home</a>
        <a class="mr-3" href="/">Product</a>
        <a class="mr-3" href="/">Feature</a>
        <a class="mr-3" href="/">Testimonial</a>
      </div>
      <button class="bg-blue-600 text-white p-2 rounded-md">Get started</button>
    </nav>
  </section> -->

  <div>
    <select v-model="limitSize" @change="onLimitChange">
      <option value="null" disabled>Limit</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </div>

  <div class="flex justify-items-end">
    <select v-model="name" @change="onCategoryFilter">
    <option value="null" disabled>Category</option>
    <option value="men's clothing">men's clothing</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
    <option value="women's clothing">women's clothing</option>
    </select>
  </div>

  <div>
    <input v-model="search" placeholder="search"
    @input="searchTitle">
  </div>

  <div class="container mx-auto">
    <div class="flex items-center justify-between flex-wrap">
      <div v-for="product of products" :key="product.id" class="sm:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 p-3">
        <div class="cursor-pointer hover:shadow-md p-2 transition-shadow"> 
          <img src="product.image" width="300" height="350" alt="">
          <h5 class="my-2 text-lg hover:text-blue-500">{{ product.title }}</h5>
          <p class="truncate text-gray-500">{{ product.description }}</p>
          <span class="font-senibold text-lg my-1 ">{{ product.price }}</span>
          <div class="flex items-center justify-between">
            <span class="bg-green-500 p-0.5 rounded-lg shadow text-white">{{ product.category }}</span>
            <span>{{ product.rating.rate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
