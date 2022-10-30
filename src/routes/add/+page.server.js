 import supabase from "$lib/header/db";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({event, request}) => {
        const data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');
        const ingredients = data.get('ingredients');
        const instructions = data.get('instructions');
        const image = data.get('image');

        const test = await supabase.from("Recipes").insert([
            {
              title: title,
              description: description,
              ingredients: ingredients,
              instructions: instructions,
              image: image,
              
            },

        ])},
  };
  export const prerender = true;