<template>
    <div>
       <h1>Counter Vue</h1>
    </div>
    <p>Count: {{ countStore.count }}</p>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const countStore = useCounterStore();
</script>