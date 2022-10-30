<script>
  /** @type {import('./$types').PageData } */
  export let data;
  let { recipe } = data;
  $: ({ recipe } = data);
  console.log(recipe);
</script>

<div class="card w-96 glass md:mx-10">
  <figure><img src={recipe[0].image} alt="car!" /></figure>
  <div class="card-body">
    <h2 class="card-title">{recipe[0].title}</h2>
    <p>{recipe[0].description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Show Recipe</button>
    </div>
  </div>
  \
</div>
