<svelte:head>
  <title>Поиск</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="my-4 text-3xl font-medium text-center">Поиск</h1>

    {#if $searchResult.length > 0}
      <ul class="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {#each $searchResult as result}
          <li
            class="overflow-hidden shadow-lg rounded-lg h-90 w-64 md:w-80 cursor-pointer m-auto"
          >
            <a href="search/{result.id}" class="w-full block h-full" rel="prefetch">
              <img
                src="hero-bg.png"
                class="max-h-40 w-full object-cover"
                alt={result.name}
              />
              <div class="bg-white dark:bg-gray-800 w-full p-4">
                <!-- <p class="text-indigo-500 text-md font-medium">
              Article
          </p> -->
                <p
                  class="text-gray-800 dark:text-white text-xl font-medium mb-2"
                >
                  {result.name}
                </p>
                <!-- <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supercar is here, 543 cv and 140 000$. This is best
                  racing GT about 7 years on...
                </p> -->
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <div class="flex justify-center items-center my-40">
        <h2 class="text-center">Поиск ничего не дал</h2>
      </div>
    {/if}
  </div>
</section>

<script lang="ts">
  import { searchResult } from '../../store';
</script>

<style>
</style>
