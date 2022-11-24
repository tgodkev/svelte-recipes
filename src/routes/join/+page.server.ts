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

         
          
    
        }
       },

       signup: async ({event, request, cookies}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) {

          return invalid(400, {missing: 'title, description, ingredients, instructions, image'});
        }else{
        

          const { user, session, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            

          },
          
          
          );
          if(session){
            console.log(session, '<-- session');
           
          }
          if(error){
            console.log(error, '<-- error');
          }

           
        
       
        }
       }
  };
  