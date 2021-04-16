
<div class="flex flex-col min-h-screen w-full">
  <main class="relative">
    <Nav />
    <slot />
  </main>
  <Footer />
</div>

<!-- <svelte:window bind:scrollY={$yscroll} /> -->

<script lang="ts">
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';
  
  import { yscroll, transparent } from '../store';
  import { stores } from '@sapper/app';
  const { page } = stores();

  
  $: if ($page.path == '/') {
    $yscroll > 0 ? ($transparent = false) : ($transparent = true);
  } else {
    $transparent = false;
  }
</script>

<style>
</style>
