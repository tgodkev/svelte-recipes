<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
  export let data;
  let { session } = data.session;
  $: ({ session } = data.session);
</script>

<div data-theme="sythwave">
  <Header userInfo={session} />

  <main>
    <slot />
  </main>
</div>
