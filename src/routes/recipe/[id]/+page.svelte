<script lang="ts">
  type RecipeData = {
    session: boolean;
    recipe: [
      {
        id: number;
        title: string;
        description: string;
        ingredients: string;
        instructions: string;
        image: string;
        user_id: number;
      }
    ];
  };
  export let data: RecipeData;
  let { recipe } = data;
  $: ({ recipe } = data);
</script>

<div class="flex flex-col md:flex-row justify-center pt-10">
  <div class="card glass mx-2 md:mx-10  md:w-1/2">
    <figure><img src={recipe[0].image} alt="car!" /></figure>
    <div class="card-body">
      <h1 class="card-title">{recipe[0].title}</h1>
      <div class="card-actions justify-end">
        <a href="/"> <button class="btn btn-primary">Home</button></a>
      </div>
      <div class=" flex flex-col justify-center items-center px-1 pt-10 ">
        <h2 class="text-3xl font-bold tracking-wide pb-5">Ingredients</h2>
        <ul>
          {recipe[0].ingredients}
        </ul>

        <h2 class="text-3xl font-bold tracking-wide pb-5 pt-10">
          Instructions
        </h2>
        <ul class="pb-10">
          {recipe[0].instructions}
        </ul>
      </div>
    </div>
  </div>
</div>
