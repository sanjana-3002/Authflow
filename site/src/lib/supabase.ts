import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const NEXT_APP_URL = ((import.meta.env.VITE_NEXT_APP_URL as string) || 'http://localhost:3000').replace(/\/$/, '')
