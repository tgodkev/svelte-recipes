<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<div class="bg-slate-300">
  <Header />

  <main>
    <slot />
  </main>
</div>
