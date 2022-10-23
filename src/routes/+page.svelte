<script>
  /** @type {*} */
  export let data;

  /** @type {any} */
  let show = [];
</script>

<div class=" pt-32 flex flex-wrap py-64 px-5 ">
  {#each data.recipes as { title, description, ingredients, instructions, image }, i}
    <div
      class="flex flex-col  items-center rounded-lg  bg-slate-600  shadow-black shadow-lg my-3 md:mt-10 md:py-5 md:w-2/5 md:mx-10"
    >
      <h1 class="text-3xl text-white font-bold py-5 px-1">{title}</h1>
      <img src={image} alt={title} class="px-10 py-10" />
      <p class="max-w-prose text-gray-200 px-10 truncate">{description}</p>

      <div class="py-5">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          on:click={() => {
            show[i] = !show[i];
          }}>Show Recipe</button
        >
      </div>
      {#if show[i]}
        <h2 class="md:text-3xl font-bold text-gray-300 ">ingredients</h2>
        <li class="max-w-prose px-10 py-3 text-gray-200">{ingredients}</li>
        <h2 class="md:text-3xl font-bold px-10 text-gray-300">Instructions</h2>
        <p class="max-w-prose px-10 py-3 text-gray-200">{instructions}</p>
      {/if}
    </div>
  {/each}
</div>
