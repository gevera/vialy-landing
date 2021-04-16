<svelte:head>
  <title>{$siteData.name}</title>
</svelte:head>

<section>
  <Hero />
  <About />
  <More />
  <!-- <Pricing /> -->
  <Contact />
</section>

<svelte:window bind:scrollY={$yscroll} />

<!-- <script context="module">
  export async function preload(page) {
    return { page };
  }
</script> -->

<script lang="ts">
  import About from '../components/About.svelte';
  import Contact from '../components/Contact.svelte';
  import Hero from '../components/Hero.svelte';
  import More from '../components/More.svelte';
  import Pricing from '../components/Pricing.svelte';

  

  import { siteData } from '../store';

  import { yscroll, transparent } from '../store';

</script>
