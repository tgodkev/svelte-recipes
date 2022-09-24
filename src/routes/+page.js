import {error} from '@sveltejs/kit'
import supabase from '$lib/header/db';

export const prerender = true;


export const load = async () => {
try{
        const { data, error } = await supabase.from("test").select('recipes');
       
      return data
}
catch(err){
    console.log(err)

}
}