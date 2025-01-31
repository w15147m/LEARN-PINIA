<template>
<div>
    <h1>About</h1>
    <div>
        <button class="btn btn-outline-secondary py text-3xl" @click="countStore.incrementCount(1) ">{{ countStore.count }}</button>
    </div>
    <div class="pt-2">
        <counter ></counter>
    </div>
    <h3>state name: {{ countStore.storeName }}</h3>
    <button class="btn btn-danger" @click="countStore.$reset">Reset state </button>

</div>
</template>

<script setup>
import counter from '@/components/counter.vue';
import { useCounterStore } from '@/stores/counter';

const countStore = useCounterStore();

countStore.$patch((state)=>{
    state.count = 2 ;
    state.storeName = 'about';
})
</script>

<style scoped>
.text-3xl {
    font-size: 3rem;
    line-height: 1.2;

}
</style>
