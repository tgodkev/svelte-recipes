
import supabase from '$lib/header/db';

export const prerender = true;
interface Recipes {
    id: number;
    title: string;
    description: string;
    image: string;
    ingredients: string;
    instructions: string;
}


export const load = async () => {

   

        // const { data, error } = await supabase.from("Recipes").select().eq('id', 17);
        const { data, error } = await supabase.from("Recipes").select();

        const recipes = data.map((item) => {
            return item;
        });
        return {
           
                 recipes 
          
        };
  
}

