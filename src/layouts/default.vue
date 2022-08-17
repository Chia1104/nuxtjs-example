<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div>
    <Transition>
      <slot />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
