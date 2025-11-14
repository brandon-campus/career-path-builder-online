/**
 * Script de migración para mover posts desde blogData.ts a Supabase
 * 
 * INSTRUCCIONES:
 * 1. Configura las variables de entorno en .env
 * 2. Ejecuta este script con: npx ts-node src/scripts/migratePosts.ts
 * 
 * Nota: Este script es para uso único durante la migración inicial
 */

import { createClient } from '@supabase/supabase-js';
import { blogPosts } from '../pages/blogData';

// Importar desde variables de entorno
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Necesitas la service role key para poder insertar sin RLS

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Variables de entorno no configuradas');
  console.error('Necesitas configurar VITE_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Crear cliente con service role key (bypass RLS)
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

// Función para generar slug desde el link
const generateSlug = (link: string): string => {
  return link.replace('/blog/', '').replace(/^\//, '');
};

// Función de migración
async function migratePosts() {
  console.log('🚀 Iniciando migración de posts...\n');

  try {
    for (const post of blogPosts) {
      console.log(`📝 Migrando: ${post.title}`);

      const slug = generateSlug(post.link);

      const postData = {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content.trim(),
        image_url: post.image,
        category: post.category,
        link: post.link,
        slug: slug,
        date: post.date,
        read_time: post.readTime,
        published: true, // Publicar todos los posts existentes
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert(postData)
        .select();

      if (error) {
        console.error(`❌ Error al migrar "${post.title}":`, error.message);
        // Si el error es de duplicado, intentar actualizar
        if (error.code === '23505') {
          console.log(`⚠️  Post ya existe, actualizando...`);
          const { error: updateError } = await supabase
            .from('blog_posts')
            .update(postData)
            .eq('slug', slug);

          if (updateError) {
            console.error(`❌ Error al actualizar:`, updateError.message);
          } else {
            console.log(`✅ Post actualizado correctamente`);
          }
        }
      } else {
        console.log(`✅ Post migrado correctamente: ${data[0].id}`);
      }
    }

    console.log('\n✨ Migración completada!');
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
    process.exit(1);
  }
}

// Ejecutar migración
migratePosts();


