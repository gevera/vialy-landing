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
          Услуга является платной для физических лиц, после отправки формы вы
          будете перенаправлены на платежную страницу нашего банка. В случае
          возникновения вопросов, вы можете позвонить в службу поддержки.
        </p>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
        >
          Узнать больше
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            />
          </svg>
        </a>
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
            <form>
              <div class="mb-1 sm:mb-2">
                <label for="name" class="inline-block mb-1 font-medium"
                  >Имя</label
                >
                <input
                  placeholder="John Doe"
                  required=""
                  type="text"
                  class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                />
              </div>
              <div class="mb-1 sm:mb-2">
                <label for="telephone" class="inline-block mb-1 font-medium"
                  >Телефон</label
                >
                <input
                  placeholder="john.doe@example.org"
                  required=""
                  type="tel"
                  class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="telephone"
                  name="telephone"
                />
              </div>
              <div class="mb-1 sm:mb-2">
                <p class="text-xs text-gray-600 sm:text-sm" />
                <label class="text-xs text-gray-600 sm:text-sm">
                  <input type="checkbox" bind:checked={agreed1} />
                  Я согласен на все условия
                </label>
                <br />
                <label class="text-xs text-gray-600 sm:text-sm">
                  <input type="checkbox" bind:checked={agreed2} />
                  Я согласен на все условия
                </label>
              </div>
              <div class="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
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
  let agreed1 = false;
  let agreed2 = false;
</script>
