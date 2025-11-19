-- ============================================
-- SCHEMA PARA BLOG POSTS EN SUPABASE
-- ============================================
-- Ejecuta este SQL en el SQL Editor de Supabase
-- Dashboard > SQL Editor > New Query

-- 1. Crear tabla blog_posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  link VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  date VARCHAR(50) NOT NULL,
  read_time VARCHAR(20) NOT NULL,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Crear índices para búsqueda
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de seguridad

-- Política: Permitir lectura pública de posts publicados
CREATE POLICY "Public posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Política: Permitir inserción solo a usuarios autenticados
CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Política: Permitir actualización solo a usuarios autenticados
CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Política: Permitir eliminación solo a usuarios autenticados
CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Política: Permitir a usuarios autenticados ver todos los posts (incluso no publicados)
CREATE POLICY "Authenticated users can view all posts"
  ON blog_posts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- 5. Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Trigger para actualizar updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- TABLA DE CATEGORÍAS DEL BLOG
-- ============================================

-- 1. Crear tabla blog_categories
CREATE TABLE IF NOT EXISTS blog_categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Crear índices para categorías
CREATE INDEX IF NOT EXISTS idx_blog_categories_active ON blog_categories(active);
CREATE INDEX IF NOT EXISTS idx_blog_categories_order ON blog_categories(order_index);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- 3. Habilitar RLS para categorías
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de seguridad para categorías

-- Política: Permitir lectura pública de categorías activas
CREATE POLICY "Active categories are viewable by everyone"
  ON blog_categories
  FOR SELECT
  USING (active = true);

-- Política: Permitir a usuarios autenticados ver todas las categorías
CREATE POLICY "Authenticated users can view all categories"
  ON blog_categories
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Política: Permitir inserción solo a usuarios autenticados
CREATE POLICY "Authenticated users can insert categories"
  ON blog_categories
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Política: Permitir actualización solo a usuarios autenticados
CREATE POLICY "Authenticated users can update categories"
  ON blog_categories
  FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Política: Permitir eliminación solo a usuarios autenticados
CREATE POLICY "Authenticated users can delete categories"
  ON blog_categories
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- 5. Trigger para actualizar updated_at en categorías
CREATE TRIGGER update_blog_categories_updated_at
  BEFORE UPDATE ON blog_categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 6. Insertar categorías iniciales
INSERT INTO blog_categories (name, slug, order_index, active) VALUES
  ('CV', 'cv', 1, true),
  ('LinkedIn', 'linkedin', 2, true),
  ('Entrevistas', 'entrevistas', 3, true),
  ('Networking', 'networking', 4, true),
  ('Negociación', 'negociacion', 5, true),
  ('Marca Personal', 'marca-personal', 6, true),
  ('Empleos', 'empleos', 7, true)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- CONFIGURACIÓN DE STORAGE PARA IMÁGENES
-- ============================================
-- Ve a Storage en el dashboard de Supabase y:
-- 1. Crea un bucket llamado "blog-images"
-- 2. Configura las políticas:

-- Política de Storage: Permitir lectura pública
-- En el dashboard de Supabase > Storage > Policies del bucket "blog-images"
-- Crear política:
--   Policy name: "Public read access"
--   Allowed operation: SELECT
--   Target roles: anon, authenticated
--   USING expression: true

-- Política de Storage: Permitir upload solo a usuarios autenticados
-- Crear política:
--   Policy name: "Authenticated users can upload"
--   Allowed operation: INSERT
--   Target roles: authenticated
--   WITH CHECK expression: auth.role() = 'authenticated'

-- Política de Storage: Permitir actualización solo a usuarios autenticados
-- Crear política:
--   Policy name: "Authenticated users can update"
--   Allowed operation: UPDATE
--   Target roles: authenticated
--   USING expression: auth.role() = 'authenticated'

-- Política de Storage: Permitir eliminación solo a usuarios autenticados
-- Crear política:
--   Policy name: "Authenticated users can delete"
--   Allowed operation: DELETE
--   Target roles: authenticated
--   USING expression: auth.role() = 'authenticated'


