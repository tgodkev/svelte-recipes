import supabase from "$lib/header/db";
import { invalid, redirect } from "@sveltejs/kit";


export const actions = {
    login: async ({event, request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) {

          return invalid(400, {missing: 'title, description, ingredients, instructions, image'});
        }else{
          

          const { user, session, error } = await supabase.auth.signIn({
            email: email,
            password: password,
          });

          supabase.auth.onAuthStateChange((event, session) => {
            cookies.get('session', 'test', {
              path: '/',
              maxAge: 60 * 60 * 24 * 7,
              sameSite: 'strict',
              httpOnly: true,
              secure: true,
        
           });
            
        });
          
    
        }
       },

       signup: async ({event, request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) {

          return invalid(400, {missing: 'title, description, ingredients, instructions, image'});
        }else{
          // generate superbase login function 

          const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            
          });

         
            
    
         

    
        }
       }
  };
  