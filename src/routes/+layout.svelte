<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
</script>

<div class="bg-blue-800">
  <Header />

  <main>
    <slot />
  </main>
</div>
