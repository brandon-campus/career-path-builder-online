import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not found. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para los posts del blog
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  link: string;
  date: string;
  read_time: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  slug: string;
}

export interface BlogPostInsert {
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  link: string;
  date: string;
  read_time: string;
  published?: boolean;
  slug: string;
}

export interface BlogPostUpdate {
  title?: string;
  excerpt?: string;
  content?: string;
  image_url?: string;
  category?: string;
  link?: string;
  date?: string;
  read_time?: string;
  published?: boolean;
  slug?: string;
}

// Tipos para las categorías del blog
export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  order_index: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface BlogCategoryInsert {
  name: string;
  slug: string;
  description?: string;
  order_index?: number;
  active?: boolean;
}

export interface BlogCategoryUpdate {
  name?: string;
  slug?: string;
  description?: string;
  order_index?: number;
  active?: boolean;
}


