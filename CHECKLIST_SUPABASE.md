# ✅ Checklist de Configuración de Supabase

## 🔴 PASO 1: Ejecutar el SQL en Supabase (OBLIGATORIO)

1. Ve al dashboard de Supabase: https://gsgpjhcljspbzyeprgya.supabase.co
2. Ve a **SQL Editor** en el menú lateral
3. Haz clic en **New Query**
4. Abre el archivo `supabase-schema.sql` de este proyecto
5. **Copia TODO el contenido SQL** (desde la línea 7 hasta la línea 79)
6. Pégalo en el SQL Editor de Supabase
7. Haz clic en **Run** (o presiona Ctrl+Enter)
8. Verifica que aparezca un mensaje de éxito
9. Verifica que la tabla `blog_posts` se haya creado:
   - Ve a **Table Editor** en el menú lateral
   - Deberías ver la tabla `blog_posts`

## 🔴 PASO 2: Configurar Storage (OBLIGATORIO)

1. Ve a **Storage** en el menú lateral de Supabase
2. Haz clic en **New bucket**
3. Crea un bucket con:
   - **Name**: `blog-images`
   - **Public bucket**: ✅ Activado (para que las imágenes sean accesibles públicamente)
4. Haz clic en **Create bucket**

### Configurar Políticas de Storage

1. Haz clic en el bucket `blog-images` que acabas de crear
2. Ve a la pestaña **Policies**
3. Haz clic en **New Policy**

#### Política 1: Lectura Pública
- **Policy name**: `Public read access`
- **Allowed operation**: `SELECT`
- **Target roles**: `anon`, `authenticated`
- **USING expression**: `true`
- Haz clic en **Review** y luego **Save policy**

#### Política 2: Upload Autenticado
- **Policy name**: `Authenticated users can upload`
- **Allowed operation**: `INSERT`
- **Target roles**: `authenticated`
- **WITH CHECK expression**: `auth.role() = 'authenticated'`
- Haz clic en **Review** y luego **Save policy**

#### Política 3: Actualización Autenticada
- **Policy name**: `Authenticated users can update`
- **Allowed operation**: `UPDATE`
- **Target roles**: `authenticated`
- **USING expression**: `auth.role() = 'authenticated'`
- Haz clic en **Review** y luego **Save policy**

#### Política 4: Eliminación Autenticada
- **Policy name**: `Authenticated users can delete`
- **Allowed operation**: `DELETE`
- **Target roles**: `authenticated`
- **USING expression**: `auth.role() = 'authenticated'`
- Haz clic en **Review** y luego **Save policy**

## 🔴 PASO 3: Crear Usuario para Hernán (OBLIGATORIO)

1. Ve a **Authentication** > **Users** en el menú lateral
2. Haz clic en **Add User** (o el botón +)
3. Selecciona **Create new user**
4. Completa el formulario:
   - **Email**: (email de Hernán, ej: hernan@email.com)
   - **Password**: (contraseña segura)
   - **Auto Confirm User**: ✅ **ACTIVAR ESTA OPCIÓN** (importante para que pueda iniciar sesión inmediatamente)
5. Haz clic en **Create user**
6. **Guarda las credenciales** en un lugar seguro para dárselas a Hernán

## 🟡 PASO 4: Migrar Posts Existentes (OPCIONAL)

Si quieres migrar los 6 posts actuales desde `blogData.ts` a Supabase:

### Opción A: Migración Manual (Recomendado)

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Ve a `http://localhost:8080/admin/login`
3. Inicia sesión con las credenciales de Hernán
4. Haz clic en "Nuevo Post"
5. Para cada post en `blogData.ts`:
   - Copia el título, excerpt, contenido, etc.
   - Sube la imagen o usa la URL existente
   - Activa "Publicar"
   - Guarda el post

### Opción B: Migración Automática (Avanzado)

1. Ve a **Settings** > **API** en Supabase
2. Copia la **service_role key** (⚠️ SOLO TEMPORALMENTE)
3. Agrega al archivo `.env`:
   ```env
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key_aqui
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

## 🟢 PASO 5: Probar la Aplicación

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Prueba el panel de admin:
   - Ve a `http://localhost:8080/admin/login`
   - Inicia sesión con las credenciales de Hernán
   - Deberías ver el panel de administración

3. Crea un post de prueba:
   - Haz clic en "Nuevo Post"
   - Completa el formulario
   - Sube una imagen de prueba
   - Activa "Publicar"
   - Guarda el post

4. Verifica en el blog público:
   - Ve a `http://localhost:8080/blog`
   - Deberías ver el post que acabas de crear

## ✅ Verificación Final

- [ ] SQL ejecutado correctamente en Supabase
- [ ] Tabla `blog_posts` creada
- [ ] Bucket `blog-images` creado
- [ ] Políticas de Storage configuradas (4 políticas)
- [ ] Usuario creado para Hernán
- [ ] "Auto Confirm User" activado
- [ ] Archivo `.env` configurado con las credenciales
- [ ] Servidor de desarrollo iniciado
- [ ] Login funciona correctamente
- [ ] Se puede crear un post
- [ ] Se puede subir una imagen
- [ ] El post aparece en el blog público

## 📝 Credenciales del Proyecto

- **URL**: https://gsgpjhcljspbzyeprgya.supabase.co
- **API Key**: (configurada en .env)
- **Usuario de Hernán**: (crear en Authentication > Users)

## 🆘 Si algo no funciona

1. Verifica que el SQL se haya ejecutado correctamente
2. Verifica que las políticas RLS estén activadas
3. Verifica que las políticas de Storage estén configuradas
4. Verifica que el usuario tenga "Auto Confirm User" activado
5. Revisa la consola del navegador (F12) para ver errores
6. Revisa los logs de Supabase en el dashboard

## 🎉 ¡Listo!

Una vez que completes estos pasos, el blog estará completamente funcional y Hernán podrá gestionar sus posts desde el panel de administración.


