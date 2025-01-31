<template>
<h1>Destructure</h1>
<h1>{{ count }}</h1>
<h1>{{ oddOrEven }}</h1>
<div class="d-flex gap-5 align-items-center justify-content-center">
    <button @click="decrementCount(2)" class="btn btn-primary"> — — </button>
    <button @click="decrementCount(1)" class="btn btn-primary"> — </button>
    <button @click="incrementCount(1)" class="btn btn-primary"> <i class="fa-solid fa-plus"></i> </button>
    <button @click="incrementCount(2)" class="btn btn-primary">
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-plus"></i>
    </button>

</div>
</template>


<script setup>
import {
    storeToRefs
} from 'pinia';
import {
    useCounterStore
} from '@/stores/counter';
const countStore = useCounterStore();

const {
    count,
    oddOrEven
} = storeToRefs(countStore);
const {
    incrementCount,
    decrementCount
} = countStore;
</script>

<style lang="scss" scoped>

</style>
