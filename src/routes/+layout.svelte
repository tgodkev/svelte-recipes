<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import "../app.css";

  interface LayoutData {
    session: boolean;
  }
  export let data: LayoutData;
  let { session } = data;
  $: ({ session } = data);
</script>

<div data-theme="sythwave">
  <Header userInfo={session} />

  <main>
    <slot />
  </main>
</div>
