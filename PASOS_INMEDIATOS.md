# 🚀 Pasos Inmediatos para Completar la Configuración

## ✅ Ya completado
- ✅ Variables de entorno configuradas en `.env`
- ✅ Código implementado y listo

## 🔴 AHORA: Configurar Supabase (15-20 minutos)

### Paso 1: Ejecutar el SQL (5 minutos)

1. **Ve al dashboard de Supabase**: https://supabase.com/dashboard/project/gsgpjhcljspbzyeprgya
2. **Ve a SQL Editor** (menú lateral izquierdo)
3. **Haz clic en "New Query"**
4. **Copia TODO el contenido del archivo `supabase-schema.sql`** (desde la línea 7 hasta la línea 79)
5. **Pega el SQL en el editor**
6. **Haz clic en "Run"** (o presiona Ctrl+Enter)
7. **Verifica que aparezca un mensaje de éxito**
8. **Verifica que la tabla se creó**:
   - Ve a **Table Editor** (menú lateral)
   - Deberías ver la tabla `blog_posts`

### Paso 2: Configurar Storage (5 minutos)

1. **Ve a Storage** (menú lateral izquierdo)
2. **Haz clic en "New bucket"**
3. **Configura el bucket**:
   - **Name**: `blog-images`
   - **Public bucket**: ✅ **ACTIVAR** (importante para que las imágenes sean accesibles)
4. **Haz clic en "Create bucket"**

#### Configurar Políticas de Storage (4 políticas):

**Para cada política, sigue estos pasos:**
1. Haz clic en el bucket `blog-images`
2. Ve a la pestaña **Policies**
3. Haz clic en **New Policy**
4. Configura según la tabla abajo
5. Haz clic en **Review** y luego **Save policy**

| Política | Operation | Roles | Expression |
|----------|-----------|-------|------------|
| Public read access | SELECT | anon, authenticated | `true` |
| Authenticated users can upload | INSERT | authenticated | `auth.role() = 'authenticated'` |
| Authenticated users can update | UPDATE | authenticated | `auth.role() = 'authenticated'` |
| Authenticated users can delete | DELETE | authenticated | `auth.role() = 'authenticated'` |

### Paso 3: Crear Usuario para Hernán (2 minutos)

1. **Ve a Authentication > Users** (menú lateral)
2. **Haz clic en "Add User"** (o el botón +)
3. **Selecciona "Create new user"**
4. **Completa el formulario**:
   - **Email**: (email de Hernán, ej: hernan@email.com)
   - **Password**: (contraseña segura)
   - **Auto Confirm User**: ✅ **ACTIVAR ESTA OPCIÓN** (muy importante)
5. **Haz clic en "Create user"**
6. **Guarda las credenciales** para dárselas a Hernán

### Paso 4: Probar la Aplicación (5 minutos)

1. **Abre una terminal** y ejecuta:
   ```bash
   npm run dev
   ```

2. **Abre tu navegador** y ve a:
   ```
   http://localhost:8080/admin/login
   ```

3. **Inicia sesión** con las credenciales de Hernán

4. **Deberías ver el panel de administración**

5. **Crea un post de prueba**:
   - Haz clic en "Nuevo Post"
   - Completa el formulario
   - Sube una imagen de prueba
   - Activa "Publicar"
   - Guarda el post

6. **Verifica en el blog público**:
   - Ve a `http://localhost:8080/blog`
   - Deberías ver el post que acabas de crear

## 🎯 Resumen de URLs

- **Dashboard de Supabase**: https://supabase.com/dashboard/project/gsgpjhcljspbzyeprgya
- **Login Admin**: http://localhost:8080/admin/login
- **Panel Admin**: http://localhost:8080/admin/blog
- **Blog Público**: http://localhost:8080/blog

## ⚠️ Importante

- **Auto Confirm User**: Debe estar activado para que Hernán pueda iniciar sesión inmediatamente
- **Bucket público**: El bucket `blog-images` debe ser público para que las imágenes sean accesibles
- **Políticas RLS**: Ya están configuradas en el SQL, solo necesitas ejecutarlo

## 🆘 Si algo no funciona

1. **Error al iniciar sesión**:
   - Verifica que "Auto Confirm User" esté activado
   - Verifica que las credenciales sean correctas
   - Verifica que el usuario exista en Authentication > Users

2. **Error al crear post**:
   - Verifica que el SQL se haya ejecutado correctamente
   - Verifica que las políticas RLS estén activadas
   - Revisa la consola del navegador (F12) para ver errores

3. **Error al subir imagen**:
   - Verifica que el bucket `blog-images` exista
   - Verifica que las políticas de Storage estén configuradas
   - Verifica que el bucket sea público

4. **Posts no aparecen**:
   - Verifica que el post esté publicado (`published: true`)
   - Verifica que las políticas RLS permitan lectura pública
   - Verifica que el campo `published` esté en `true`

## 🎉 ¡Listo!

Una vez que completes estos 4 pasos, el blog estará completamente funcional y Hernán podrá gestionar sus posts desde el panel de administración.

**¿Necesitas ayuda?** Revisa el archivo `CHECKLIST_SUPABASE.md` para más detalles.


