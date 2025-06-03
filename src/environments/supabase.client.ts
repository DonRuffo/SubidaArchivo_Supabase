import { createClient } from '@supabase/supabase-js';
let supabase
const supabaseUrl = 'https://trwnmnegjvtkwnmbodwh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyd25tbmVnanZ0a3dubWJvZHdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTc2MTIsImV4cCI6MjA2Mzg3MzYxMn0.-oe-5yZueLhN63vYh63yf1hQm1Jn19Qc3aTMNAdRzu4';

export default supabase = createClient(supabaseUrl, supabaseKey);