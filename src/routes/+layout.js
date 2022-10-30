import supabase from "$lib/header/db";
export const prerender = true;


export const load = async ({cookies}) => {

     const session =   supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
       
        cookies.set('session', session, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          httpOnly: true,
          secure: true,
    
       });
      
        return {
            session
        };
    });
    
    // 5f420076-915a-411a-8cb8-d0a3bdea3241"
  return {
    session : session
  };
}



