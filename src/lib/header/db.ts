
import { createClient } from '@supabase/supabase-js'
export const prerender = true;

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default supabase;