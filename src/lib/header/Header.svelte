<script lang="ts">
  import supabase from "$lib/header/db";
  import { Cookies } from "@sveltejs/kit";

  export let userInfo: boolean;

  async function signOut({ Cookies }): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("error", error);

    Cookies.remove("UID");
  }

  // check to see if user is logged in
</script>

<div class="navbar bg-base-100 flex flex-row">
  <div class="w-3/4">
    <a href="/" class="btn btn-ghost normal-case text-xl">Just Recipes</a>
  </div>

  <div class="flex 1/4">
    <a href="/add" class="px-5">Add Recipe</a>
    {#if userInfo === false}
      <a href="/join" class=" ">Sign UP</a>
      <a href="/join" class=" ">Log In</a>
    {:else}
      <a href="/" on:click={signOut()} class=" ">Sign Out</a>
    {/if}
  </div>
</div>
