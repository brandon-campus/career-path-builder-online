# 🚀 Instrucciones Rápidas para Configurar Supabase

## Para el Desarrollador

### Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto
3. Espera 2-3 minutos a que se configure

### Paso 2: Configurar Base de Datos

1. En el dashboard, ve a **SQL Editor**
2. Abre el archivo `supabase-schema.sql` de este proyecto
3. Copia todo el contenido SQL
4. Pégalo en el SQL Editor de Supabase
5. Ejecuta la query (Run)
6. Verifica que se haya creado la tabla `blog_posts`

### Paso 3: Configurar Storage

1. Ve a **Storage** en el dashboard
2. Crea un bucket llamado `blog-images`
3. Configura las políticas (están documentadas en `supabase-schema.sql`):
   - Lectura pública (SELECT) para `anon` y `authenticated`
   - Upload (INSERT) solo para `authenticated`
   - Update y Delete solo para `authenticated`

### Paso 4: Crear Usuario para Hernán

1. Ve a **Authentication** > **Users**
2. Haz clic en "Add User" o "Create User"
3. Ingresa el email de Hernán
4. Establece una contraseña segura
5. **Importante**: Activa "Auto Confirm User" para que pueda iniciar sesión inmediatamente

### Paso 5: Obtener Credenciales

1. Ve a **Settings** > **API**
2. Copia:
   - **Project URL** (ej: `https://xxxxx.supabase.co`)
   - **anon/public key** (la clave pública, no la service role)

### Paso 6: Configurar Variables de Entorno

1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **IMPORTANTE**: El archivo `.env` NO se sube al repositorio (ya está en `.gitignore`)

### Paso 7: Migrar Posts Existentes (Opcional)

Si quieres migrar los 6 posts actuales desde `blogData.ts`:

1. Ve a **Settings** > **API** en Supabase
2. Copia la **service_role key** (¡SOLO TEMPORALMENTE!)
3. Agrega al `.env`:

```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

4. Instala ts-node:

```bash
npm install -D ts-node
```

5. Ejecuta el script de migración:

```bash
npx ts-node src/scripts/migratePosts.ts
```

6. **IMPORTANTE**: Elimina `SUPABASE_SERVICE_ROLE_KEY` del `.env` después de la migración

### Paso 8: Probar

1. Inicia el servidor:

```bash
npm run dev
```

2. Ve a `http://localhost:8080/admin/login`
3. Inicia sesión con las credenciales de Hernán
4. Deberías ver el panel de administración

## Para Hernán (Usuario Final)

### Cómo Iniciar Sesión

1. Ve a `https://tu-dominio.com/admin/login`
2. Ingresa tu email y contraseña
3. Haz clic en "Iniciar sesión"

### Cómo Crear un Nuevo Post

1. Inicia sesión en el panel de administración
2. Haz clic en "Nuevo Post"
3. Completa el formulario:
   - **Título**: El título del artículo
   - **Resumen**: Una breve descripción (aparece en la lista de posts)
   - **Categoría**: Selecciona una categoría
   - **Fecha**: Fecha de publicación (ej: "20 Abr 2025")
   - **Tiempo de lectura**: Ej: "5 min"
   - **Slug**: Se genera automáticamente, pero puedes editarlo (ej: "mi-articulo")
   - **Link**: Se genera automáticamente (ej: "/blog/mi-articulo")
   - **Imagen**: Puedes subir una imagen o usar una URL
   - **Contenido**: El contenido HTML del artículo
   - **Publicar**: Activa esta opción para que el post sea visible públicamente

4. Haz clic en "Crear Post"

### Cómo Editar un Post

1. En la lista de posts, haz clic en "Editar"
2. Modifica los campos que necesites
3. Haz clic en "Actualizar Post"

### Cómo Publicar/Despublicar un Post

1. En la lista de posts, verás un botón "Publicar" o "Despublicar"
2. Haz clic para cambiar el estado
3. Solo los posts publicados son visibles en el blog público

### Cómo Eliminar un Post

1. En la lista de posts, haz clic en "Eliminar"
2. Confirma la eliminación
3. **⚠️ CUIDADO**: Esta acción no se puede deshacer

## 🎯 Características del Panel

- ✅ Crear, editar y eliminar posts
- ✅ Publicar/despublicar posts
- ✅ Subir imágenes directamente a Supabase
- ✅ Editor HTML para el contenido
- ✅ Vista previa de la imagen
- ✅ Generación automática de slugs y links
- ✅ Categorías predefinidas

## 🔒 Seguridad

- Solo usuarios autenticados pueden acceder al panel
- Solo posts publicados son visibles públicamente
- Las imágenes se almacenan de forma segura en Supabase
- Las contraseñas están encriptadas

## ❓ Problemas Comunes

### No puedo iniciar sesión
- Verifica que el usuario esté creado en Supabase
- Verifica que "Auto Confirm User" esté activado
- Verifica que las credenciales sean correctas

### Los posts no aparecen en el blog
- Verifica que el post esté publicado (`published: true`)
- Verifica que las políticas RLS estén configuradas correctamente

### No puedo subir imágenes
- Verifica que el bucket `blog-images` exista
- Verifica que las políticas de Storage estén configuradas
- Verifica que estés autenticado

### Error al guardar un post
- Verifica que todos los campos requeridos estén completos
- Verifica que el slug sea único
- Verifica la consola del navegador para ver el error específico

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Revisa los logs de Supabase en el dashboard
3. Verifica que todas las políticas estén configuradas correctamente


