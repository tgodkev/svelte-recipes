<script>
  /** @type {*} */
  export let data;

  /** @type {any} */
</script>

<div class=" pt-32 flex flex-wrap md:flex-row ">
  {#each data.recipes as { title, description, ingredients, instructions, image, id }, i}
    <div class="card w-96 glass md:mx-10">
      <figure><img src={image} alt="car!" /></figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <a href="/recipe/{id}">
            <button class="btn btn-primary">Show Recipe</button>
          </a>
        </div>
      </div>
      \
    </div>
  {/each}
</div>
