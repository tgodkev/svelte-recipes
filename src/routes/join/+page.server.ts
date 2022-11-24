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

          if(session){
            cookies.set('UID', session.access_token, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7,
              sameSite: 'strict',
              httpOnly: true,
              secure: true,
            });
           
          }
          if(error){
            console.log(error, '<-- error');
          }
          
    
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
         
          if(user){
            console.log(user, '<--user');
            cookies.set('UID', user.id, {
              path: '/',
              maxAge: 60 * 60 * 24 * 7,
              sameSite: 'strict',
              httpOnly: true,
              secure: true,
            });
           
            
          }
          if(error){
            console.log(error, '<-- error');
          }

           
        
       
        }
       }
  };
  