<script>
  import supabase from "$lib/header/db";
  let title = "";
  let description = "";
  let ingredients = "";
  let instructions = "";
  let image = "";

  // generate function to submit form to supabase

  async function submit() {
    const test = await supabase.from("Recipes").insert([
      {
        title: title,
        description: description,
        ingredients: ingredients,
        instructions: instructions,
        image: image,
      },
    ]);
    title = "";
    description = "";
    ingredients = "";
    instructions = "";
    image = "";
  }
</script>

<div>
  <h1>Add Recipe</h1>
  <form on:submit|preventDefault={submit} method="post">
    <label for="title">Title</label>
    <input type="text" name="title" id="title" bind:value={title} />
    <label for="description">Description</label>
    <textarea
      type="text"
      name="description"
      id="description"
      bind:value={description}
    />
    <label for="ingredients">Ingredients</label>
    <textarea
      type="text"
      name="ingredients"
      id="ingredients"
      bind:value={ingredients}
    />
    <label for="instructions">Instructions</label>
    <textarea
      type="text"
      name="instructions"
      id="instructions"
      bind:value={instructions}
    />
    <label for="image">Image</label>
    <input type="text" name="image" id="image" bind:value={image} />
    <button type="submit">Submit</button>
  </form>
</div>
