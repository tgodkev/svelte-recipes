 import supabase from "$lib/header/db";
import { invalid } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({event, request}) => {
        const data = await request.formData();
        const title = data.get('title');
        const description = data.get('description');
        const ingredients = data.get('ingredients');
        const instructions = data.get('instructions');
        const image = data.get('image');

        if(!title || !description || !ingredients || !instructions) {

          return invalid(400, {missing: 'title, description, ingredients, instructions, image'});
        }
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