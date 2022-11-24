<script>
  import { enhance } from "$app/forms";
  import { redirect } from "@sveltejs/kit";
  export let data;

  let { session } = data;
  $: ({ session } = data);
</script>

{#if session === true}
  <div>
    <form
      use:enhance={({ form, data, cancel }) => {
        return ({ result }) => {
          if (result.type === "success") {
            form.reset();

            alert("logged in successfully");
            redirect(200, "/recipes");
          }

          if (result.type === "invalid") {
            cancel();
            alert("Error adding recipe");
          }
        };
      }}
      method="POST"
      action="?/login"
      class="flex flex-col px-10 md:px-32 justify-center py-32"
    >
      <div class="form-control">
        <label for="email" class="input-group input-group-vertical">
          <span class="text-xl text-primary-focus">Email</span>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Enter your email here"
            class="input input-bordered input-secondary"
          />
        </label>
      </div>
      <div class="form-control py-4">
        <label for="password" class="input-group input-group-vertical">
          <span class="text-xl text-primary-focus">Password</span>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="enter your password"
            class="input input-bordered input-secondary "
          />
        </label>
      </div>

      <button class="btn btn-xl btn-secondary" type="submit">login</button>
    </form>
  </div>
{/if}
<!--login form above 
 -->

{#if session === false}
  <div>
    <form
      use:enhance={({ form, data, cancel }) => {
        return ({ result }) => {
          if (result.type === "success") {
            form.reset();

            alert("Signed up successfully");
            redirect(200, "/recipes");
          }

          if (result.type === "invalid") {
            cancel();
            alert("Error adding recipe");
          }
        };
      }}
      method="POST"
      action="?/signup"
      class="flex flex-col px-10 md:px-32 justify-center py-32"
    >
      <div class="form-control">
        <label for="email" class="input-group input-group-vertical">
          <span class="text-xl text-primary-focus">Email</span>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Enter your email here"
            class="input input-bordered input-secondary"
          />
        </label>
      </div>
      <div class="form-control py-4">
        <label for="password" class="input-group input-group-vertical">
          <span class="text-xl text-primary-focus">Password</span>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="enter your password"
            class="input input-bordered input-secondary "
          />
        </label>
      </div>

      <button class="btn btn-xl btn-secondary" type="submit">signup</button>
    </form>
  </div>
{/if}
