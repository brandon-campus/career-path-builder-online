import { useEffect, useState } from 'react';
import { supabase, BlogCategory } from '@/lib/supabase';

export const useBlogCategories = (activeOnly: boolean = true) => {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories();
  }, [activeOnly]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);

      let query = supabase
        .from('blog_categories')
        .select('*')
        .order('order_index', { ascending: true });

      if (activeOnly) {
        query = query.eq('active', true);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        throw fetchError;
      }

      setCategories(data || []);
    } catch (err) {
      console.error('Error fetching blog categories:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar las categorías');
    } finally {
      setLoading(false);
    }
  };

  return { categories, loading, error, refetch: fetchCategories };
};

