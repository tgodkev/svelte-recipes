import {json, error} from '@sveltejs/kit'

export const prerender = true;

export const GET = async () => { 



    try{
        const response = await fetch('https://ukuzureskletletjvxyi.supabase.co/rest/v1');
        const recipes = await response.json();
     
        console.log(recipes);

        return new json(recipes)
    }

    catch(err){
        throw error(500, err);
    }
}