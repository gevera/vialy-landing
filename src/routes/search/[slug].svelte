<svelte:head>
  <title>{data?.name}</title>
</svelte:head>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <a href="/search" class="flex items-center mb-4 text-green-500">
      <div>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </div>
      <span class="uppercase ml-2">Обратно</span>
    </a>
    <hr />
    <div class="mt-4">
      <h1 class="text-center text-3xl my-16">{data?.name}</h1>
      <div class="mt-4 flex flex-wrap justify-center">
        {#each data?.pictures as picture}
          <div
            class="overflow-hidden shadow-lg rounded-lg relative mb-6 w-64 h-64 m-auto grid place-items-center"
          >
            <img
              class=""
              src={`https://dev3.bedre.ru/media/${picture?.filename}` ||
                'hreo-bg.png'}
              alt={data?.name}
            />
          </div>
        {/each}
      </div>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl text-center mb-6">Родственики</h2>
          <ul class="flex flex-col divide divide-y">
            {#if roditeli.length}
              <div class="py-4 ">
                <h3 class="text-xl text-center mb-4">Родители</h3>
                {#each roditeli as parent}
                  <ListItem
                    name={`${parent?.first_name} ${parent?.second_name}`}
                    dob={parent?.birth_date}
                  />
                {/each}
              </div>
            {/if}

            {#if rebenoki.length}
              <div class="py-4 ">
                <h3 class="text-xl text-center mb-4">Дети</h3>
                {#each rebenoki as baby}
                  <ListItem
                    name={`${baby?.first_name} ${baby?.second_name}`}
                    dob={baby?.birth_date}
                  />
                {/each}
              </div>
            {/if}

            {#if bratsestra.length}
              <div class="py-4 ">
                <h3 class="text-xl text-center mb-4">Братья и сестры</h3>
                {#each bratsestra as sibling}
                  <ListItem
                    name={`${sibling?.first_name} ${sibling?.second_name}`}
                    dob={sibling?.birth_date}
                  />
                {/each}
              </div>
            {/if}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<script context="module">
  // the (optional) preload function takes a
  // `{ path, params, query }` object and turns it into
  // the data we need to render the page
  export async function preload(page, session) {
    // the `slug` parameter is available because this file
    // is called [slug].svelte
    const { slug } = page.params;

    // `this.fetch` is a wrapper around `fetch` that allows
    // you to make credentialled requests on both
    // server and client
    const res = await this.fetch(
      `https://dev3.bedre.ru/people/${slug}?expand=relations,pictures,kinsmans`
    );
    const data = await res.json();

    return { data };
  }
</script>

<script>
  import ListItem from '../../components/ListItem.svelte';

  export let data;
  let kinsmen = [];
  // let roditeli = [];
  // let rebenoki = [];
  // let bratsestra = [];
  $: kinsmen = data.kinsmans.sort((a, b) => a.type - b.type);
  $: roditeli = kinsmen.filter((k) => k.type == 1);
  $: rebenoki = kinsmen.filter((k) => k.type == 2);
  $: bratsestra = kinsmen.filter((k) => k.type == 3);
  // $: console.log(kinsmen);
  // $: console.log(roditeli);
  // $: console.log(rebenoki);
  // $: console.log(bratsestra);
</script>

<style>
</style>
