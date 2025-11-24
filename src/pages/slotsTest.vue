<script setup lang="ts"></script>

<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <body>
      <slot />
    </body>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
