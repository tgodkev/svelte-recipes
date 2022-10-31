<script>
  import { enhance } from "$app/forms";
</script>

<div>
  <form
    use:enhance={({ form, data, cancel }) => {
      return ({ result }) => {
        if (result.type === "success") {
          form.reset();
          console.log(data);

          alert("logged in successfully");
        }

        if (result.type === "invalid") {
          cancel();
          alert("Error adding recipe");
        }
      };
    }}
    method="POST"
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

    <button class="btn btn-xl btn-secondary" type="submit">Submit</button>
  </form>
</div>
