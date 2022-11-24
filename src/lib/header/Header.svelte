<script lang="ts">
  import { page } from "$app/stores";

  export let userInfo: boolean;
  console.log(userInfo, "userInfo");
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
      <a href="/join" class=" ">Sign Out</a>
    {/if}
  </div>
</div>
