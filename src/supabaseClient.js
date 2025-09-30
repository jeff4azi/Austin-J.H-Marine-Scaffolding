import { createClient } from '@supabase/supabase-js'
import { PROJECT_URL, SUPABASE_ANON_KEY } from "./data";

export const supabase = createClient(PROJECT_URL, SUPABASE_ANON_KEY)
