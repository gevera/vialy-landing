<div class="overflow-hidden bg-green-100" id="register">
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex flex-col items-center justify-between xl:flex-row">
      <div class="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-green-400 sm:text-4xl sm:leading-none"
        >
          Условия использования <br class="hidden md:block" />
          нашего<span class="text-teal-accent-400 ml-2">сервиса</span>
        </h2>
        <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
          Для размещения профиля в системе вам нужно заказать корреспондента.
          Услуга является платной. Все условия предоставления услуги отражены в
          <a
            class="text-green-400"
            target="_blank"
            href="https://docs.google.com/document/d/1z2b4BR7mCeQmNrnjo5O3WA81aqAs_2rBpjkxV6WBsQw/edit"
            >публичной оферте</a
          >.<br />
          Услуга обработки заявки является платной, стоимость услуги
          <span class="italic">5000</span> рублей.
        </p>
        <!-- <a
          href=""
          aria-label=""
          target="_blank"
          class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
        >
          Оферта
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            />
          </svg>
        </a> -->
      </div>
      <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
        <div class="relative">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
          >
            <defs>
              <pattern
                id="766323e1-e594-4ffd-a688-e7275079d540"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
              width="52"
              height="24"
            />
          </svg>
          <div class="relative bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3
              class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl"
            >
              Подключиться к системе
            </h3>
            <form on:submit|preventDefault={submitContactForm}>
              <div class="mb-1 sm:mb-2">
                <label for="name" class="inline-block mb-1 font-medium"
                  >Имя</label
                >
                <input
                  bind:value={name}
                  placeholder="Введите имя"
                  required
                  type="text"
                  class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                />
              </div>
              <div class="mb-1 sm:mb-2">
                <label for="regions" class="inline-block mb-1 font-medium"
                  >Регион</label
                >

                <select
                  required
                  bind:value={region}
                  name="regions"
                  class="block w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-400"
                >
                  <option value="" disabled selected
                    ><span class="text-gray-400">Выберите регион</span></option
                  >
                  {#each regions as rgn}
                    <option value={rgn.name}>{rgn.name}</option>
                  {/each}
                </select>
              </div>
              <div class="mb-1 sm:mb-2">
                <label for="telephone" class="inline-block mb-1 font-medium"
                  >Телефон</label
                >
                <input
                  use:imask={options}
                  bind:value={telephone}
                  on:accept={handleTelephone}
                  on:complete={() => (allow = !allow)}
                  required
                  minlength="18"
                  name="telephone"
                  placeholder="+7 (000) 000-00-00"
                  type="tel"
                  class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="telephone"
                />
              </div>
              <div class="my-4">
                <p class="text-xs text-gray-600 sm:text-sm" />
                <label class="text-xs text-gray-600 sm:text-sm">
                  <input type="checkbox" bind:checked={agreed} />
                  Я подтверждаю свое согласие на обработку моих персональных данных
                  и согласен с условиями <a
                  class="text-green-400"
                  target="_blank"
                  href="https://docs.google.com/document/d/1z2b4BR7mCeQmNrnjo5O3WA81aqAs_2rBpjkxV6WBsQw/edit"
                  >оферты</a>
                </label>
              </div>
              <div class="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  disabled={!allow}
                  class:disabled={!allow}
                  class:active={allow}
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded focus:outline-none"
                >
                  Оставить заявку
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  import { imask } from 'svelte-imask';

  const regions = [
    { name: 'Адыгея' },
    { name: 'Алтай' },
    { name: 'Алтайский край' },
    { name: 'Амурская область' },
    { name: 'Архангельская область' },
    { name: 'Астраханская область' },
    { name: 'Башкортостан' },
    { name: 'Белгородская область' },
    { name: 'Брянская область' },
    { name: 'Бурятия' },
    { name: 'Владимирская область' },
    { name: 'Волгоградская область' },
    { name: 'Вологодская область' },
    { name: 'Воронежская область' },
    { name: 'Дагестан' },
    { name: 'Еврейская АО' },
    { name: 'Забайкальский край' },
    { name: 'Ивановская область' },
    { name: 'Ингушетия' },
    { name: 'Иркутская область' },
    { name: 'Кабардино-Балкария' },
    { name: 'Калининградская область' },
    { name: 'Калмыкия' },
    { name: 'Калужская область' },
    { name: 'Камчатский край' },
    { name: 'Карачаево-Черкессия' },
    { name: 'Карелия' },
    { name: 'Кемеровская область' },
    { name: 'Кировская область' },
    { name: 'Коми' },
    { name: 'Костромская область' },
    { name: 'Краснодарский край' },
    { name: 'Красноярский край' },
    { name: 'Курганская область' },
    { name: 'Курская область' },
    { name: 'Ленинградская область' },
    { name: 'Липецкая область' },
    { name: 'Магаданская область' },
    { name: 'Марий Эл' },
    { name: 'Мордовия' },
    { name: 'Москва' },
    { name: 'Московская область' },
    { name: 'Мурманская область' },
    { name: 'Ненецкий АО' },
    { name: 'Нижегородская область' },
    { name: 'Новгородская область' },
    { name: 'Новосибирская область' },
    { name: 'Омская область' },
    { name: 'Оренбургская область' },
    { name: 'Орловская область' },
    { name: 'Пензенская область' },
    { name: 'Пермский край' },
    { name: 'Приморский край' },
    { name: 'Псковская область' },
    { name: 'Ростовская область' },
    { name: 'Рязанская область' },
    { name: 'Самарская область' },
    { name: 'Санкт-Петербург' },
    { name: 'Саратовская область' },
    { name: 'Саха (Якутия)' },
    { name: 'Сахалинская область' },
    { name: 'Свердловская область' },
    { name: 'Северная Осетия - Алания' },
    { name: 'Смоленская область' },
    { name: 'Ставропольский край' },
    { name: 'Тамбовская область' },
    { name: 'Татарстан' },
    { name: 'Тверская область' },
    { name: 'Томская область' },
    { name: 'Тульская область' },
    { name: 'Тыва' },
    { name: 'Тюменская область' },
    { name: 'Удмуртия' },
    { name: 'Ульяновская область' },
    { name: 'Хабаровский край' },
    { name: 'Хакасия' },
    { name: 'Ханты-Мансийский АО - Югра' },
    { name: 'Челябинская область' },
    { name: 'Чеченская республика' },
    { name: 'Чувашская республика' },
    { name: 'Чукотский АО' },
    { name: 'Ямало-Ненецкий АО' },
    { name: 'Ярославская область' },
    { name: 'Крым' },
    { name: 'Севастополь' },
  ];

  let name = '';
  let telephone = '';
  let region = '';
  let allow = false;
  let agreed = false;

  const options = {
    mask: '+{7} (000) 000-00-00',
  };

  const handleTelephone = ({ detail }) => {
    // allow = false;
    if (detail.value.charAt(4) == '8') {
      detail.value = detail.value.replace('8', '');
    }
  };

  const submitContactForm = async () => {
    console.log(name);
    console.log(telephone);
    console.log(region);
  };

  $: if (name.length != 0 && telephone.length == 18 && agreed == true && region.length != 0) {
    allow = true;
  } else {
    allow = false;
  }
</script>

<style>
  .active {
    @apply bg-green-400 hover:border-green-500 text-white cursor-pointer shadow-md;
  }

  .disabled {
    @apply bg-green-100 text-gray-600 cursor-not-allowed;
  }
</style>
