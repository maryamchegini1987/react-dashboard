
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxbefjvbajuobnhendkz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YmVmanZiYWp1b2JuaGVuZGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMzE3ODgsImV4cCI6MjAwOTYwNzc4OH0.dpA98fd9i0LBTGQAhSMI_7x7c3gqN_df0zS66fp7OgY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;