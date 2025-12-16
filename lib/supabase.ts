import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uuiwyrjzbagvwoobbuor.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aXd5cmp6YmFndndvb2JidW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MDEyODAsImV4cCI6MjA4MTI3NzI4MH0.F5XB24TjE2jqArSVk_IIvlSAIk5M3LOEyB5JM07evIY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);