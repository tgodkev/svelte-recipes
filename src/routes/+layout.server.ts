import supabase from "$lib/header/db";


export const load = async ({cookies}) => {

      cookies.get('UID');

      if(cookies.get('UID') === cookies.get('UID')){
        console.log('logged in');
        return {
          session: true
        }
      } else {
        console.log('not logged in');
        return {
          session: false
        }
      }

   

    // 5f420076-915a-411a-8cb8-d0a3bdea3241"
  
}






