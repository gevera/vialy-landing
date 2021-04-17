<script>
    export let name = '';
    export let dob = '';
</script>
<li class="flex flex-row bg-gray-100 rounded-lg border-b-2 mb-2">
    <div
      class="select-none cursor-pointer flex flex-1 items-center p-4"
    >
      <div class="flex-1 pl-1 mr-16">
        <div class="font-medium dark:text-white">
          <h4 class="text-xl">
          {name}
          </h4>
        </div>
      </div>
      <div class="text-gray-600 dark:text-gray-200 text-sm">
        {dob.substring(0, 4)} г.
      </div>
    </div>
  </li>