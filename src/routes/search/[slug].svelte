<svelte:head>
  <title>{data?.name}</title>
</svelte:head>

<PageTransitions>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <a
        href="/search"
        class="flex items-center mb-4 text-gray-400 hover:text-green-400"
      >
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
        <h1 class="text-center text-3xl my-16">{data.second_name} {data.first_name} {data.agname}</h1>

        <div class="flex flex-wrap items-start">
          <div class="mt-4 flex flex-wrap justify-center w-full md:w-1/2">
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

          <div class="mt-10 md:mt-0 grid grid-cols-1 gap-10 w-full md:w-1/2">
            <div class="md:pl-8">
              <div>
                <h2 class="text-2xl text-center mb-6">О человеке</h2>
                <p class="my-4 text-lg rounded-md border border-green-400 p-4">{data?.about}</p>
              </div>
              <h2 class="text-2xl text-center mb-6">Родственики</h2>
              <ul class="flex flex-col divide divide-y">
                {#if roditeli.length}
                  <div class="py-4 ">
                    <h3 class="text-xl text-center mb-4">Родители</h3>
                    {#each roditeli as parent}
                      <ListItem
                        name={`${parent?.relative.second_name} ${parent?.relative.first_name} ${parent?.relative.agname}`}
                        dob={parent?.relative.birth_date}
                      />
                    {/each}
                  </div>
                {/if}

                {#if rebenoki.length}
                  <div class="py-4 ">
                    <h3 class="text-xl text-center mb-4">Дети</h3>
                    {#each rebenoki as baby}
                      <ListItem
                        name={`${baby?.relative.second_name} ${baby?.relative.first_name} ${baby?.relative.agname}`}
                        dob={baby?.relative.birth_date}
                      />
                    {/each}
                  </div>
                {/if}

                {#if bratsestra.length}
                  <div class="py-4 ">
                    <h3 class="text-xl text-center mb-4">Братья и сестры</h3>
                    {#each bratsestra as sibling}
                      <ListItem
                        name={`${sibling?.relative.second_name} ${sibling?.relative.first_name} ${sibling?.relative.agname}`}
                        dob={sibling?.relative.birth_date}
                      />
                    {/each}
                  </div>
                {/if}
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</PageTransitions>

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
  import PageTransitions from '../../components/PageTransitions.svelte';

  import ListItem from '../../components/ListItem.svelte';

  export let data;
  // let kinsmen = [];
  let relationships = [];
  let roditeli = [];
  let rebenoki = [];
  let bratsestra = [];
  // $: kinsmen = data.kinsmans.sort((a, b) => a.type - b.type);
  $: if(data.hasOwnProperty('relations')) {
       relationships = data?.relations?.sort((a, b) => a.type - b.type);
  }
  // $: roditeli = kinsmen.filter((k) => k.type == 1);
  $: roditeli = relationships.filter((k) => k.type == 1);
  // $: rebenoki = kinsmen.filter((k) => k.type == 2);
  $: rebenoki = relationships.filter((k) => k.type == 2);
  // $: bratsestra = kinsmen.filter((k) => k.type == 3);
  $: bratsestra = relationships.filter((k) => k.type == 3);
  // $: console.log(data);
  // $: console.log(relationships);
  // $: console.log(kinsmen);
  // $: console.log(roditeli);
  // $: console.log(rebenoki);
  // $: console.log(bratsestra);
</script>

<style>
</style>
