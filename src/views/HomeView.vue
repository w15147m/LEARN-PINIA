<template>
<div>
    <h1>Home</h1>
    <span class="bg-red-500 text-3xl">{{ countStore.count }}</span>
    <div class="d-flex gap-5 align-items-center justify-content-center">
        <button @click="countStore.decrementCount(2)" class="btn btn-primary"> — — </button>
        <button @click="countStore.decrementCount(1)" class="btn btn-primary"> — </button>
        <button @click="countStore.incrementCount(1)" class="btn btn-primary"> <i class="fa-solid fa-plus"></i> </button>
        <button @click="countStore.incrementCount(2)" class="btn btn-primary"> <i class="fa-solid fa-plus"></i> &nbsp; <i class="fa-solid fa-plus"></i> </button>
    </div>
    <hr>
    <div class="odd even">
        <p> Given number is <span class="bg-red-500 text-white">{{ countStore.oddOrEven }}</span> </p>
    </div>
    <div>
        <h1>Edit counter</h1>
        <input type="number" class="form-control" v-model="countStore.count">
    </div>
</div>
</template>

<script setup>
import { useCounterStore
 } from '@/stores/counter';
const countStore = useCounterStore();

</script>

<style scoped>
.text-3xl {
    font-size: 5rem;
}
</style>
