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
</script>

<div>hello world</div>
{#each data.recipes as { title, description, ingredients, instructions, image }}
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{ingredients}</p>
    <p>{instructions}</p>
    <img src={image} alt="" />
  </div>
{/each}
