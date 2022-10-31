<script>
  /** @type {*} */
  export let data;

  /** @type {any} */
</script>

<div class=" pt-32 flex flex-wrap justify-center md:flex-row ">
  {#each data.recipes as { title, description, image, id }, i}
    <div class="card glass my-3 mx-5 md:w-1/3 md:mx-10">
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
    </div>
  {/each}
</div>
