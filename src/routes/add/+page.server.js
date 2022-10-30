/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({event, request}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
      

      console.log(email, password);
    }
  };
  export const prerender = true;