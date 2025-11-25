<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <div class="body">
      <slot />
    </div>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
