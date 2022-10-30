<script>
  /** @type {*} */
  export let data;

  /** @type {any} */
  let show = [];
</script>

<div class=" pt-32 flex flex-wrap md:flex-row ">
  {#each data.recipes as { title, description, ingredients, instructions, image }, i}
    <div class="card w-96 glass md:mx-10">
      <figure><img src={image} alt="car!" /></figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            on:click={() => {
              show[i] = !show[i];
            }}>Show Recipe</button
          >
        </div>
      </div>
      <div>
        {#if show[i]}
          <h2 class="md:text-3xl font-bold text-gray-300 ">ingredients</h2>
          <li class="max-w-prose px-10 py-3 text-gray-200">{ingredients}</li>
          <h2 class="md:text-3xl font-bold px-10 text-gray-300">
            Instructions
          </h2>
          <p class="max-w-prose px-10 py-3 text-gray-200">{instructions}</p>
        {/if}
      </div>
    </div>
  {/each}
</div>
