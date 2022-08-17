<script setup lang="ts">
const { count, inc, dec } = useCount();
const el = ref<HTMLElement | null>(null);
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div>
    <button @click="dec()">-</button>
    <h1 class="text-6xl">
      {{ count }}
    </h1>
    <button @click="inc()">+</button>
    <div ref="el" :style="style" style="position: fixed">
      Drag me! I am at {{ x }}, {{ y }}
    </div>
    <NuxtLink to="/home"> Home </NuxtLink>
  </div>
</template>
