<header
  class={`${
    $transparent ? 'bg-none text-white' : 'bg-white text-black'
  } top-0 fixed mx-auto z-50 transform duration-300`}
>
  <div class="px-4 py-4 mx-auto md:px-24 lg:px-8 w-screen">
    <div class="flex items-center justify-between w-full mx-auto">
      <a
        href="/#hero"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <svg
          class="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          stroke-linejoin="round"
          stroke-width="2"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        <span class="ml-2 text-xl font-bold tracking-wide uppercase"
          >Company</span
        >
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/#mission"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide transition-colors duration-200 hover:text-green-400"
            >Миссия</a
          >
        </li>
        <!-- <li>
          <a
            href="/#system"
            aria-label="Our product"
            title="Our product"
            class="font-medium tracking-wide transition-colors duration-200 hover:text-green-400"
            >Система</a
          >
        </li> -->
        <li>
          <a
            href="/#register"
            aria-label="Product pricing"
            title="Product pricing"
            class="font-medium tracking-wide transition-colors duration-200 hover:text-green-400"
            >Зарегистрироваться</a
          >
        </li>
        <!-- <li>
          <a
            href="/"
            aria-label="About us"
            title="About us"
            class="font-medium tracking-wide transition-colors duration-200 hover:text-green-400"
            >About us</a
          >
        </li> -->
      </ul>
      <ul class="flex items-center justify-end hidden space-x-8 lg:flex">
        <li class="">
          <form
            on:submit|preventDefault={triggerSearch}
            class="flex items-center shadow-md"
          >
            <input
              type="text"
              placeholder="Поиск..."
              bind:value={$searchTerm}
              class="py-3 px-3 text-green-500 focus:text-green-500 opacity-50 hover:opacity-100 focus:opacity-100"
            />
            <button
              type="submit"
              class={`bg-green-400 text-white inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide transition duration-200 focus:shadow-outline focus:outline-none`}
              aria-label="Поиск"
              title="Поиск"
            >
              <div>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  /></svg
                >
              </div>
            </button>
          </form>
        </li>
      </ul>
      <!-- Mobile menu -->
      <div class="lg:hidden">
        <button
          on:click={() => ($sidemenu = !$sidemenu)}
          aria-label="Open Menu"
          title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        >
          <svg class="w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        <!-- Mobile menu dropdown -->
        {#if $sidemenu}
          <div
            class="absolute top-0 left-0 w-full text-green-400"
            transition:scale
          >
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    on:click={() => ($sidemenu = false)}
                    href="/#hero"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12" />
                      <rect x="3" y="17" width="7" height="6" />
                      <rect x="14" y="1" width="7" height="6" />
                      <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span
                      class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                      >Company</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    on:click={() => ($sidemenu = false)}
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      on:click={() => ($sidemenu = false)}
                      href="/#mission"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >О Нас</a
                    >
                  </li>
                  <li>
                    <a
                      on:click={() => ($sidemenu = false)}
                      href="/#system"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Система</a
                    >
                  </li>
                  <li>
                    <a
                      on:click={() => ($sidemenu = false)}
                      href="/#register"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-medium tracking-wide text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Зарегистрироваться</a
                    >
                  </li>
                  <!-- <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      class="font-medium tracking-wide text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >About us</a
                    >
                  </li> -->
                  <li>
                    <form
                      on:submit|preventDefault={triggerSearch}
                      class="flex items-center justify-between shadow-md"
                    >
                      <input
                        type="text"
                        placeholder="Поиск..."
                        bind:value={$searchTerm}
                        class="py-3 px-3 text-green-500 focus:text-green-500 opacity-50 hover:opacity-100 focus:opacity-100"
                      />
                      <button
                        type="submit"
                        class={`bg-green-400 text-white inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide transition duration-200 focus:shadow-outline focus:outline-none`}
                        aria-label="Поиск"
                        title="Поиск"
                      >
                        <div>
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                              fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"
                            /></svg
                          >
                        </div>
                      </button>
                    </form>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>

<script>
  import { sidemenu, transparent, searchTerm, searchResult } from '../store';
  import { scale } from 'svelte/transition';
  import { goto } from '@sapper/app';

  const searchPerson = async (st) => {
    const response = await fetch(
      `https://dev3.bedre.ru/people/search?name=${st}`
    );
    const data = await response.json();
    console.log(data);
    $searchResult = [...data];
  };

  const triggerSearch = async () => {
    await searchPerson($searchTerm);
    goto('/search');
    $sidemenu = false;
  };

  // $: console.log($searchResult);
</script>
