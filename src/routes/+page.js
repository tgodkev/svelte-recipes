
import supabase from '$lib/header/db';

export const prerender = true;


export const load = async () => {
try{
        const { data, error } = await supabase.from("Recipes").select('*');
       
        
        // remove data key an push value into new array 
        const recipes = data.map((item) => {
            return item;
        });
        return {
           
                 recipes 
          
        };
    }

    catch(err){
      console.log(err)
  
  }
}

