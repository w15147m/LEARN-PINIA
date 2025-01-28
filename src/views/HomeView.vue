<template>
<div>
    <h1>Home</h1>
    <span class="bg-red-500 text-3xl">{{ count }}</span>
    <div class="d-flex gap-5 align-items-center justify-content-center">
        <button @click="decrementCount(2)" class="btn btn-primary"> — — </button>
        <button @click="decrementCount(1)" class="btn btn-primary"> — </button>
        <button @click="incrementCount(1)" class="btn btn-primary"> <i class="fa-solid fa-plus"></i> </button>
        <button @click="incrementCount(2)" class="btn btn-primary"> <i class="fa-solid fa-plus"></i> &nbsp; <i class="fa-solid fa-plus"></i> </button>
    </div>
    <hr>
    <div class="odd even">
        <p> Given number is {{ oddOrEven }} </p>
    </div>
</div>
</template>

<script setup>
import {
    computed,
    ref
} from 'vue';

const count = ref(0);

const incrementCount = (num) => {
    count.value += num;
}
const decrementCount = (num) => {
    count.value -= num;
}
const oddOrEven = computed(() => {
    return count.value % 2 === 0 ? 'even' : 'odd';
})
</script>

<style scoped>
.text-3xl {
    font-size: 5rem;
}
</style>
