import supabase from "$lib/header/db";
import { invalid } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({event, request}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        

        if(!email || !password) {

          return invalid(400, {missing: 'title, description, ingredients, instructions, image'});
        }else{
        const test = await supabase.auth.signUp({
            email: email,
            password: password,
            
          });
        }
       
       }
  };
  