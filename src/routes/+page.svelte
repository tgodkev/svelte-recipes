<script>
  import supabase from "$lib/header/db";
  import { onMount } from "svelte";

  async function signup() {
    const { user, session, error } = await supabase.auth.signUp({
      email: "tgodkev@gmail.com",
      password: "12345678",
    });
    alert("user created");
  }
  /** @type {*} */
  export let data;

  console.log(data[0]);
</script>

<div>hello world</div>
<h2>{data[0].recipes}</h2>

{#each data[0].recipes as recipe}
  <div>{recipe}</div>
{/each}
<button on:click={signup}>Sign up </button>
