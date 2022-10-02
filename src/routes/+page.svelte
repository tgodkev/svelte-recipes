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

<div class="pt-32 grid md:grid-cols-2">
  {#each data.recipes as { title, description, ingredients, instructions, image }, i}
    <div class="flex flex-col justify-center items-center">
      <div>
        <h1>{title}</h1>
      </div>
      <div class="px-20 py-10">
        <img src={image} alt="" />
      </div>
      <div>
        <p class="max-w-prose">{description}</p>
      </div>
      <div>
        <button
          on:click={() => {
            show[i] = !show[i];
          }}>Show Recipe</button
        >
      </div>
      {#if show[i]}
        <div>
          <h2 class="md:text-3xl font-bold">ingredients</h2>
          <li class="max-w-prose">{ingredients}</li>
          <h2 class="md:text-3xl font-bold">Instructions</h2>
          <p>{instructions}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>
