<svelte:head>
  <title>{$siteData.name}</title>
</svelte:head>

<PageTransitions>
  <section>
    <Hero />
    <About />
    <!-- <More /> -->
    <!-- <Pricing /> -->
    <Contact />
  </section>
</PageTransitions>

<svelte:window bind:scrollY={$yscroll} />

<!-- <script context="module" ✂prettier:content✂="CiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSkgewogICAgcmV0dXJuIHsgcGFnZSB9OwogIH0K">{}</script> -->
<script lang="ts">
  import About from '../components/About.svelte';
  import Contact from '../components/Contact.svelte';
  import Hero from '../components/Hero.svelte';
  import More from '../components/More.svelte';
  import PageTransitions from '../components/PageTransitions.svelte';
  import Pricing from '../components/Pricing.svelte';

  import { siteData } from '../store';

  import { yscroll, transparent } from '../store';
</script>
