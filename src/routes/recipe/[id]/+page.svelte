<script>
  /** @type {import('./$types').PageData } */
  export let data;
  let { recipe } = data;
  $: ({ recipe } = data);
</script>

<div class="flex flex-row pt-10">
  <div class="card w-1/2 glass md:mx-10">
    <div class="card-body">
      <h1 class="card-title">{recipe[0].title}</h1>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Home</button>
      </div>
    </div>
    <figure><img src={recipe[0].image} alt="car!" /></figure>
  </div>

  <div class="w-1/2 flex flex-col justify-center items-center">
    <h2 class="text-3xl font-bold tracking-wide">Ingredients</h2>
    <ul>
      {recipe[0].ingredients}
    </ul>

    <h2 class="text-3xl font-bold tracking-wide pt-10">Instructions</h2>
    <ul>
      {recipe[0].instructions}
    </ul>
  </div>
</div>
