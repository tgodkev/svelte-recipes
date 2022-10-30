import supabase from '$lib/header/db';

export const prerender = true;


export const load = async ({params}) => {



         const { data, error } = await supabase.from("Recipes").select().eq('id', params.id);
        
     
    
        return {
           
               recipe:  data
          
        };
  
}

