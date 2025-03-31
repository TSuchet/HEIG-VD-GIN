<template>
  <footer v-if="$nav.currentLayout !== 'cover'" class="absolute bottom-0 right-3 p-2">
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>