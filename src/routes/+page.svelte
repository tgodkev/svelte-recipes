<script lang="ts">
  interface HomeData {
    session: boolean;
    recipes: [
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
  }
  export let data: HomeData;

  let { session, recipes } = data;
  $: ({ session, recipes } = data);
</script>

<div class=" pt-32 grid md:grid-cols-3">
  {#each recipes as { title, description, image, id }, i}
    <div class="card  shadow-xl my-5 mx-5 image-full  ">
      <figure><img src={image} alt={title} /></figure>
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
    <!--test-->
  {/each}
</div>
