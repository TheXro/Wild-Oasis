
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qilqyjcohqmvmcmgaifm.supabase.co'
const supabaseKey  = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpbHF5amNvaHFtdm1jbWdhaWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzAyODIsImV4cCI6MjAzODAwNjI4Mn0.gOSakDNg7_2xqdLZgEPlHOOQHanimhwmjLnNzQBICvQ`
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;