import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbtbosshmgamckxnswme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNidGJvc3NobWdhbWNreG5zd21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MDI3OTMsImV4cCI6MjA2MDI3ODc5M30.7K1gSRHtSNbR4V88SY55NP9jXM2yxDNidx15MJAm35Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;