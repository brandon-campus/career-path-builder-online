# Guía de Configuración de Supabase para el Blog

Esta guía te ayudará a configurar Supabase para que Hernán pueda gestionar el blog desde el panel de administración.

## 📋 Pasos de Configuración

### 1. Crear cuenta y proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta (gratis)
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración (2-3 minutos)

### 2. Configurar la base de datos

1. Ve al **SQL Editor** en el dashboard de Supabase
2. Crea una nueva query
3. Copia y pega el contenido del archivo `supabase-schema.sql`
4. Ejecuta la query
5. Verifica que la tabla `blog_posts` se haya creado correctamente

### 3. Configurar Storage para imágenes

1. Ve a **Storage** en el dashboard de Supabase
2. Crea un nuevo bucket llamado `blog-images`
3. Configura las políticas de acceso:

   **Política 1: Lectura pública**
   - Policy name: `Public read access`
   - Allowed operation: `SELECT`
   - Target roles: `anon`, `authenticated`
   - USING expression: `true`

   **Política 2: Upload autenticado**
   - Policy name: `Authenticated users can upload`
   - Allowed operation: `INSERT`
   - Target roles: `authenticated`
   - WITH CHECK expression: `auth.role() = 'authenticated'`

   **Política 3: Actualización autenticada**
   - Policy name: `Authenticated users can update`
   - Allowed operation: `UPDATE`
   - Target roles: `authenticated`
   - USING expression: `auth.role() = 'authenticated'`

   **Política 4: Eliminación autenticada**
   - Policy name: `Authenticated users can delete`
   - Allowed operation: `DELETE`
   - Target roles: `authenticated`
   - USING expression: `auth.role() = 'authenticated'`

### 4. Configurar Autenticación

1. Ve a **Authentication** > **Users** en el dashboard
2. Crea un nuevo usuario para Hernán:
   - Email: (email de Hernán)
   - Password: (contraseña segura)
   - Opcionalmente, puedes habilitar "Auto Confirm User"

### 5. Obtener las credenciales de API

1. Ve a **Settings** > **API** en el dashboard
2. Copia los siguientes valores:
   - **Project URL** (ej: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (la clave pública)

### 6. Configurar variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega las siguientes variables:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **IMPORTANTE**: El archivo `.env` está en `.gitignore` y no se subirá al repositorio

### 7. Migrar posts existentes (Opcional)

Si quieres migrar los posts actuales desde `blogData.ts` a Supabase:

1. Obtén la **Service Role Key** desde **Settings** > **API**
2. Agrega temporalmente esta variable al `.env`:

```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. Ejecuta el script de migración (necesitarás instalar `ts-node` primero):

```bash
npm install -D ts-node
npx ts-node src/scripts/migratePosts.ts
```

4. **IMPORTANTE**: Elimina la `SUPABASE_SERVICE_ROLE_KEY` del `.env` después de la migración (nunca la subas al repositorio)

### 8. Probar la aplicación

1. Inicia el servidor de desarrollo:

```bash
npm run dev
```

2. Ve a `http://localhost:8080/admin/login`
3. Inicia sesión con las credenciales de Hernán
4. Deberías poder ver el panel de administración

## 🔐 Seguridad

- ✅ Las políticas RLS (Row Level Security) están activadas
- ✅ Solo usuarios autenticados pueden crear/editar/eliminar posts
- ✅ Solo posts publicados son visibles públicamente
- ✅ Las imágenes se almacenan de forma segura en Supabase Storage

## 📝 Uso del Panel de Administración

### Crear un nuevo post

1. Inicia sesión en `/admin/login`
2. Ve a `/admin/blog`
3. Haz clic en "Nuevo Post"
4. Completa el formulario:
   - **Título**: Título del artículo
   - **Resumen**: Breve descripción
   - **Categoría**: Selecciona una categoría
   - **Slug**: URL amigable (se genera automáticamente desde el título)
   - **Link**: Ruta completa (ej: `/blog/mi-articulo`)
   - **Fecha**: Fecha de publicación
   - **Tiempo de lectura**: Ej: "5 min"
   - **Imagen**: Puedes subir una imagen o usar una URL
   - **Contenido**: HTML del artículo
   - **Publicar**: Activa para publicar el post

5. Haz clic en "Crear Post"

### Editar un post

1. Ve a `/admin/blog`
2. Haz clic en "Editar" en el post que quieres modificar
3. Modifica los campos necesarios
4. Haz clic en "Actualizar Post"

### Publicar/Despublicar un post

1. Ve a `/admin/blog`
2. Haz clic en "Publicar" o "Despublicar" según corresponda

### Eliminar un post

1. Ve a `/admin/blog`
2. Haz clic en "Eliminar" en el post que quieres eliminar
3. Confirma la eliminación

## 🚀 Despliegue

Cuando despliegues la aplicación (Vercel, Netlify, etc.):

1. Agrega las variables de entorno en la plataforma:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. **NUNCA** subas la `SUPABASE_SERVICE_ROLE_KEY` a producción

## 📚 Recursos

- [Documentación de Supabase](https://supabase.com/docs)
- [Supabase Storage](https://supabase.com/docs/guides/storage)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## ❓ Troubleshooting

### Error: "Supabase credentials not found"
- Verifica que el archivo `.env` existe y tiene las variables correctas
- Reinicia el servidor de desarrollo después de agregar las variables

### Error: "Permission denied"
- Verifica que las políticas RLS estén configuradas correctamente
- Verifica que el usuario esté autenticado

### Error: "Failed to upload image"
- Verifica que el bucket `blog-images` existe
- Verifica que las políticas de Storage estén configuradas correctamente

### Los posts no aparecen en el blog público
- Verifica que el campo `published` esté en `true`
- Verifica que la política RLS permita la lectura pública de posts publicados


