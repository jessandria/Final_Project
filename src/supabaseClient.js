import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fkygrtnyzkucbewffoho.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZreWdydG55emt1Y2Jld2Zmb2hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyODA1ODUsImV4cCI6MjAzNjg1NjU4NX0.Xse8qzQjteF8RLrNco4S5GxdLZXOj0smr79EiVLKDjY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
