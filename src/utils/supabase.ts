
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const cookieStorage = {
    getItem: (key: string) => {
      const cookies = document.cookie.split('; ').reduce((acc: Record<string, string>, current) => {
        const [name, value] = current.split('=');
        acc[name] = value;
        return acc;
      }, {});
      return cookies[key];
    },
    setItem: (key: string, value: string) => {
      document.cookie = `${key}=${value}; path=/;`;
    },
    removeItem: (key: string) => {
      document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
  };
  
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth:{
        autoRefreshToken: true,
        persistSession: true,
        storage: cookieStorage
    }
});



export default supabase