<script>
  import { enhance } from "$app/forms";
</script>

<div>
  <form
    use:enhance={({ form, data, cancel }) => {
      return ({ result }) => {
        if (result.type === "success") {
          form.reset();
          alert("Recipe added successfully");
        }

        if (result.type === "invalid") {
          cancel();
          alert("Error adding recipe");
        }
      };
    }}
    method="POST"
    class="flex flex-col px-10 md:px-32 justify-center py-32"
  >
    <div class="form-control">
      <label for="title" class="input-group input-group-vertical">
        <span class="text-xl text-primary-focus">Title</span>
        <input
          name="title"
          id="title"
          type="text"
          placeholder="Your Tasty Title Here"
          class="input input-bordered input-secondary"
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="description" class="input-group input-group-vertical">
        <span class="text-xl text-primary-focus">Description</span>
        <input
          name="description"
          id="description"
          type="text"
          placeholder="A Delicious Description Here"
          class="input input-bordered input-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="ingredients" class="input-group input-group-vertical">
        <span class="text-xl text-primary-focus">Ingredients</span>
        <textarea
          name="ingredients"
          id="ingredients"
          type="text"
          placeholder="An Ingenuity of Ingredients Here"
          class="textarea textarea-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="instructions" class="input-group input-group-vertical">
        <span class="text-xl text-primary-focus">Instructions</span>
        <textarea
          name="instructions"
          id="instructions"
          type="text"
          placeholder="A Step by Step Guide Here"
          class="textarea textarea-secondary "
        />
      </label>
    </div>
    <div class="form-control py-4">
      <label for="image" class="input-group input-group-vertical">
        <span class="text-xl text-primary-focus">Image (must be image url)</span
        >
        <input
          name="image"
          id="image"
          type="text"
          placeholder="A Delectable Image Here (optional, also must be image url)"
          class="input input-bordered input-secondary "
        />
      </label>
    </div>

    <button class="btn btn-xl btn-secondary" type="submit">Submit</button>
  </form>
</div>
