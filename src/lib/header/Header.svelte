<script>
  import { page } from "$app/stores";

  export let userInfo;
  // check to see if user is logged in
</script>

<div class="navbar bg-base-100 flex flex-row">
  <div class="w-3/4">
    <a href="/" class="btn btn-ghost normal-case text-xl">Just Recipes</a>
  </div>

  <div class="flex 1/4">
    <a href="/add" class="btn ">Add Recipe</a>
    <a href="/join" class="btn uppercase mx-2">Sign up</a>
    <a href="/join" class="btn ">Login</a>
  </div>
</div>
