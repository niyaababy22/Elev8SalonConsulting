const SUPABASE_URL = 'https://rrsjtkmjcfyjucmmsrgc.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
    'sb_publishable_Lxc0U2ZOKpnP0SAYIJTc5Q_fJkJVjcb';

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);