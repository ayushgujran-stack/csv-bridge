-- =====================================================
-- CSV Bridge Database Schema
-- Run this in your Supabase SQL Editor to set up the backend.
-- =====================================================

-- 1. Create the user_settings table
create table if not exists public.user_settings (
  id uuid references auth.users on delete cascade primary key,
  api_key text unique,
  webhook_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create index on api_key for fast lookup during ingestion
create index if not exists idx_user_settings_api_key on public.user_settings(api_key);

-- 3. Enable Row Level Security (RLS)
alter table public.user_settings enable row level security;

-- 4. Create RLS policies for authenticated users
create policy "Users can view their own settings"
  on public.user_settings for select
  using (auth.uid() = id);

create policy "Users can insert their own settings"
  on public.user_settings for insert
  with check (auth.uid() = id);

create policy "Users can update their own settings"
  on public.user_settings for update
  using (auth.uid() = id);
