<script>
  import supabase from "$lib/header/db";
  let userEmail = "";
  let userPassword = "";
  async function signup() {
    const user = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });
    userEmail = "";
    userPassword = "";
    alert("Account created!");
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
      <input type="text" name="title" id="title" bind:value={userEmail} />
      <label for="description">password</label>
      <input
        type="text"
        name="description"
        id="description"
        bind:value={userPassword}
      />

      <button class="bg-blue-500 py-2 my-4 w-1/2" type="submit">Submit</button>
    </form>
    <div class="modal-action">
      <label for="my-modal" class="btn">Close</label>
    </div>
  </div>
</div>
