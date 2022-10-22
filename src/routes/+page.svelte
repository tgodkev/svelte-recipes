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
      class="flex flex-col w-2/5 mx-10 items-center rounded-lg  bg-slate-600 mt-10 md:py-5 shadow-black shadow-lg"
    >
      <h1 class="text-3xl text-white font-bold">{title}</h1>
      <img src={image} alt={title} class="px-10 py-10" />
      <p class="max-w-prose  px-10">{description}</p>

      <div class="py-5">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          on:click={() => {
            show[i] = !show[i];
          }}>Show Recipe</button
        >
      </div>
      {#if show[i]}
        <h2 class="md:text-3xl font-bold ">ingredients</h2>
        <li class="max-w-prose px-10 py-3">{ingredients}</li>
        <h2 class="md:text-3xl font-bold px-10">Instructions</h2>
        <p class="max-w-prose px-10 py-3">{instructions}</p>
      {/if}
    </div>
  {/each}
</div>
