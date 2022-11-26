


export const load = async ({cookies}) => {

      cookies.get('UID');
      console.log(cookies, ' cookies');
      

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






