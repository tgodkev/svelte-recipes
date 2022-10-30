<script>
  import { enhance } from "$app/forms";
</script>

<div>
  <h1>Add Recipe</h1>
  <form
    use:enhance={({ form, data, cancel }) => {
      return ({ result }) => {
        if (result.type === "success") {
          form.reset();
          alert("Recipe added successfully");
        }
      };
    }}
    method="POST"
    class="flex flex-col px-10 md:px-32 justify-center py-32"
  >
    <div class="form-control">
      <label for="title" class="input-group input-group-vertical">
        <span class="text-xl text-primary">Title</span>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="info@site.com"
          class="input input-bordered input-secondary"
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="description" class="input-group input-group-vertical">
        <span class="text-xl text-primary">Description</span>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="info@site.com"
          class="input input-bordered input-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="ingredients" class="input-group input-group-vertical">
        <span class="text-xl text-primary">Ingredients</span>
        <textarea
          name="ingredients"
          id="ingredients"
          type="text"
          placeholder="info@site.com"
          class="textarea textarea-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="instructions" class="input-group input-group-vertical">
        <span class="text-xl text-primary">Instructions</span>
        <textarea
          name="instructions"
          id="instructions"
          type="text"
          placeholder="info@site.com"
          class="textarea textarea-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="image" class="input-group input-group-vertical">
        <span class="text-xl text-primary">Image (must be image url)</span>
        <input
          name="image"
          id="image"
          type="text"
          placeholder="info@site.com"
          class="input input-bordered input-secondary "
        />
      </label>
    </div>

    <button class="btn btn-xl btn-secondary" type="submit">Submit</button>
  </form>
</div>
