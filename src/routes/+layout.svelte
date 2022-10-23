<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  export let data;
  let { session } = data.session;
  $: ({ session } = data.session);
  console.log(session, " from layout");
</script>

<div class="bg-slate-300">
  <Header userInfo={session} />

  <main>
    <slot />
  </main>
</div>
