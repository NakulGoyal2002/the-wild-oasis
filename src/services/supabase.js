import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://krzdxeytdqfdgyigspcd.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyemR4ZXl0ZHFmZGd5aWdzcGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMjE3MjEsImV4cCI6MjAzNjg5NzcyMX0.kl7IDcDaKJa37dagBu-YdoZJvkNnLUMBqI2pvWJEMxo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
