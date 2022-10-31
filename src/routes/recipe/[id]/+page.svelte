<script>
  /** @type {import('./$types').PageData } */
  export let data;
  let { recipe } = data;
  $: ({ recipe } = data);
</script>

<div class="flex flex-col md:flex-row pt-10">
  <div class="card glass mx-2 md:mx-10  md:w-1/2">
    <div class="card-body">
      <h1 class="card-title">{recipe[0].title}</h1>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Home</button>
      </div>
    </div>
    <figure><img src={recipe[0].image} alt="car!" /></figure>
  </div>

  <div class=" flex flex-col justify-center items-center px-5 pt-10 md:w-1/2">
    <h2 class="text-3xl font-bold tracking-wide pb-5">Ingredients</h2>
    <ul>
      {recipe[0].ingredients}
    </ul>

    <h2 class="text-3xl font-bold tracking-wide pb-5 pt-10">Instructions</h2>
    <ul class="pb-10">
      {recipe[0].instructions}
    </ul>
  </div>
</div>
