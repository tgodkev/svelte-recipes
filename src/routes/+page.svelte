<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  console.log(data.session);
</script>

<div class=" pt-32 grid md:grid-cols-3">
  {#each data.recipes as { title, description, image, id }, i}
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
