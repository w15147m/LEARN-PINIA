<template>
<div>
    <h1>About</h1>
    <div>
        <button class="btn btn-outline-secondary py text-3xl" @click="countStore.incrementCount(1) ">{{ countStore.count }}</button>
    </div>
</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const countStore = useCounterStore();
</script>

<style scoped>
.text-3xl {
    font-size: 3rem;
    line-height: 1.2;

}
</style>
