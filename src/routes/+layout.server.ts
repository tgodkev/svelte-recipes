import supabase from "$lib/header/db";


export const load = async ({cookies}) => {

        supabase.auth.onAuthStateChange((event, session) => {
       

       setCookies(session?.access_token)
      

    
      
    });
    


    function setCookies(id: string | null): void {
    {
      cookies.set('test session', id, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
  
     });
    }
  }
    // 5f420076-915a-411a-8cb8-d0a3bdea3241"
  return {
    session : 'worls'
  };

};




