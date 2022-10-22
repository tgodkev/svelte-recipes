<script>
  import supabase from "$lib/header/db";
  import { onMount } from "svelte";
  import { identity } from "svelte/internal";

  async function signup() {
    const { user, session, error } = await supabase.auth.signUp({
      email: "tgodkev@gmail.com",
      password: "12345678",
    });
    alert("user created");
  }
  /** @type {*} */
  export let data;

  /** @type {any} */
  let show = [];
</script>

<div class=" pt-32 flex flex-wrap py-64 ">
  {#each data.recipes as { title, description, ingredients, instructions, image }, i}
    <div
      class="flex flex-col justify-center w-2/5 mx-10 items-center rounded-lg  bg-violet-600 mt-10 md:py-5 "
    >
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p class="max-w-prose">{description}</p>

      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          on:click={() => {
            show[i] = !show[i];
          }}>Show Recipe</button
        >
      </div>
      {#if show[i]}
        <h2 class="md:text-3xl font-bold">ingredients</h2>
        <li class="max-w-prose">{ingredients}</li>
        <h2 class="md:text-3xl font-bold">Instructions</h2>
        <p>{instructions}</p>
      {/if}
    </div>
  {/each}
</div>
