<script>
  import supabase from "$lib/header/db";
  export let userInfo;
  console.log(userInfo, " from modal");
  let userEmail = "";
  let userPassword = "";
  async function signup() {
    const {
      user,
      session: userSession,
      error,
    } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });
    userEmail = "";
    userPassword = "";
    alert("Confrim your email to create your account!");
    if (error) {
      alert(error.message);
    }
  }
  async function signin({ cookies }) {
    const {
      user,
      session: userSession,
      error,
    } = await supabase.auth.signIn({
      email: userEmail,
      password: userPassword,
    });
    await cookies.set("session", userSession, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "strict",
      httpOnly: true,
      secure: true,
    });

    userEmail = "";
    userPassword = "";
    alert("Logged in!");
    if (error) {
      alert(error.message);
    }
  }
</script>

<!-- The button to open modal -->
<div class="flex flex-col md:flex-row ">
  <label for="sign-up" class="btn glass modal-button mx-2">Sign Up.</label>
  <label for="log-in" class="btn glass modal-button">Log In.</label>
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="sign-up" class="modal-toggle" />
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

      <button class="bg-blue-500 py-2 my-4 w-1/2" type="submit">Sign Up</button>
    </form>
    <div class="modal-action">
      <label for="sign-up" class="btn">Close</label>
    </div>
  </div>
</div>

<!-- End of the sign up modal. -->

<input type="checkbox" id="log-in" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <form
      on:submit|preventDefault={signin}
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

      <button class="bg-blue-500 py-2 my-4 w-1/2" type="submit">Login</button>
    </form>
    <div class="modal-action">
      <label for="log-in" class="btn">Close</label>
    </div>
  </div>
</div>
