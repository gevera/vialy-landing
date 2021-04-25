<svelte:head>
  <title>Поиск</title>
</svelte:head>

<PageTransitions>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <h1 class="my-4 text-3xl font-medium text-center">Поиск</h1>

      {#if $searchResult.length > 0}
        <ul class="my-10 grid grid-cols-1 gap-10">
          {#each $searchResult as result}
            <li
              class="overflow-hidden shadow-md hover:shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto"
            >
              <a
                href="search/{result.person_id}"
                class="w-full block h-full"
                rel="prefetch"
              >
                <!-- <img
                src="hero-bg.png"
                class="max-h-40 w-full object-cover"
                alt={result.name}
              /> -->
                <div
                  class="bg-white text-gray-800 hover:text-green-400 w-full p-4 flex justify-between items-center px-4 md:px-8"
                >
                  <div class="flex items-center">
                    <img alt={`Avatar for ${result.name}`} src={`https://dev3.bedre.ru/media/${result.filename}`} class="mx-auto object-cover rounded-full h-10 w-10 md:h-16 md:w-16 "/>
                    <h3 class="md:text-xl font-medium ml-4">
                      {result.second_name} {result.first_name} {result.agname}
                      <br>
                      <span class="text-sm md:text-base">{result.birth_date}</span>
                    </h3>
                  </div>
                  <div class="ml-2">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      ><path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      /></svg
                    >
                  </div>

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
</PageTransitions>

<script lang="ts">
  import { searchResult } from '../../store';
  import PageTransitions from '../../components/PageTransitions.svelte';

  // $: console.log($searchResult);
</script>

<style>
</style>
