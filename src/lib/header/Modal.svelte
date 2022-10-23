<script>
  import supabase from "$lib/header/db";
  let email = "";
  let password = "";
  async function signup() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    email = "";
    password = "";
    alert("user created");
  }
</script>

<!-- The button to open modal -->
<label for="my-modal" class="btn modal-button">Sign Up.</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <form
      on:submit|preventDefault={signup}
      method="post"
      class="flex flex-col px-10 md:px-32 justify-center py-32"
    >
      <label for="title">Email</label>
      <input type="text" name="title" id="title" bind:value={email} />
      <label for="description">password</label>
      <input
        type="text"
        name="description"
        id="description"
        bind:value={password}
      />

      <button class="bg-blue-500 py-2 my-4 w-1/2" type="submit">Submit</button>
    </form>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
