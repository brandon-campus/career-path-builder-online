# 📋 Configuración de Categorías en Supabase

## ✅ Código Implementado

Ya se implementó todo el código necesario:
- ✅ SQL agregado al schema (`supabase-schema.sql`)
- ✅ Tipos TypeScript creados
- ✅ Hook `useBlogCategories` creado
- ✅ `Blog.tsx` actualizado para usar categorías desde Supabase
- ✅ `BlogEditor.tsx` actualizado para usar categorías desde Supabase

## 🔴 PASO OBLIGATORIO: Ejecutar SQL en Supabase

### 1. Ejecutar el SQL de categorías

1. Ve al dashboard de Supabase: https://supabase.com/dashboard/project/gsgpjhcljspbzyeprgya
2. Ve a **SQL Editor** (menú lateral izquierdo)
3. Haz clic en **New Query**
4. Abre el archivo `supabase-schema.sql` de este proyecto
5. **Copia SOLO la sección de categorías** (desde la línea que dice `-- TABLA DE CATEGORÍAS DEL BLOG` hasta antes de `-- CONFIGURACIÓN DE STORAGE`)
6. **Pega el SQL en el editor**
7. **Haz clic en "Run"** (o presiona Ctrl+Enter)
8. **Verifica que aparezca un mensaje de éxito**

### 2. Verificar que se creó la tabla

1. Ve a **Table Editor** (menú lateral)
2. Deberías ver la tabla `blog_categories`
3. Deberías ver 6 categorías insertadas:
   - CV
   - LinkedIn
   - Entrevistas
   - Networking
   - Negociación
   - Marca Personal

## 🎯 Cómo Funciona Ahora

### Blog Público (`/blog`)
- Obtiene categorías activas desde Supabase
- Muestra botones de filtro dinámicamente
- "Todos" siempre aparece primero
- Filtra posts por categoría seleccionada

### Panel Admin (`/admin/blog`)
- Al crear/editar un post, muestra dropdown con categorías desde Supabase
- Solo muestra categorías activas
- Si no hay categorías, muestra un mensaje de error

## ✏️ Cómo Agregar/Modificar Categorías

### Opción 1: Desde Supabase Dashboard (Recomendado)

1. Ve a **Table Editor** > `blog_categories`
2. Haz clic en **Insert** (o el botón +)
3. Completa los campos:
   - **name**: Nombre visible (ej: "Desarrollo Profesional")
   - **slug**: URL amigable (ej: "desarrollo-profesional")
   - **description**: (opcional) Descripción de la categoría
   - **order_index**: Número para ordenar (ej: 7)
   - **active**: ✅ true (para que sea visible)
4. Haz clic en **Save**

### Opción 2: Desde SQL Editor

```sql
INSERT INTO blog_categories (name, slug, order_index, active) 
VALUES ('Desarrollo Profesional', 'desarrollo-profesional', 7, true);
```

### Cómo Editar una Categoría

1. Ve a **Table Editor** > `blog_categories`
2. Haz clic en la categoría que quieres editar
3. Modifica los campos necesarios
4. Haz clic en **Save**

### Cómo Desactivar una Categoría (sin eliminar)

1. Ve a **Table Editor** > `blog_categories`
2. Haz clic en la categoría
3. Cambia **active** a `false`
4. Haz clic en **Save**
5. La categoría ya no aparecerá en el blog público ni en el dropdown, pero los posts existentes mantendrán su categoría

### Cómo Eliminar una Categoría

1. Ve a **Table Editor** > `blog_categories`
2. Haz clic en la categoría
3. Haz clic en **Delete**
4. ⚠️ **CUIDADO**: Esto eliminará la categoría permanentemente. Los posts que usen esta categoría seguirán funcionando, pero la categoría no estará disponible para nuevos posts.

## 📝 Campos de la Tabla

- **id**: UUID (generado automáticamente)
- **name**: Nombre visible de la categoría (ej: "CV", "LinkedIn")
- **slug**: URL amigable única (ej: "cv", "linkedin")
- **description**: Descripción opcional de la categoría
- **order_index**: Número para ordenar las categorías (menor = aparece primero)
- **active**: true/false - Si está activa, aparece en el blog y en el dropdown
- **created_at**: Fecha de creación (automático)
- **updated_at**: Fecha de actualización (automático)

## 🎨 Ordenar Categorías

Las categorías se ordenan por `order_index` (ascendente). Para cambiar el orden:

1. Edita cada categoría
2. Cambia el valor de `order_index`
3. Menor número = aparece primero

Ejemplo:
- CV: order_index = 1
- LinkedIn: order_index = 2
- Entrevistas: order_index = 3
- etc.

## ✅ Verificación

Después de ejecutar el SQL:

1. Inicia el servidor: `npm run dev`
2. Ve a `/blog` - Deberías ver los botones de categorías
3. Ve a `/admin/blog` - Crea un nuevo post
4. En el dropdown de categoría, deberías ver las 6 categorías

## 🆘 Troubleshooting

### Error: "No hay categorías disponibles"
- Verifica que ejecutaste el SQL en Supabase
- Verifica que la tabla `blog_categories` existe
- Verifica que hay categorías con `active = true`

### Las categorías no aparecen en el blog
- Verifica que las categorías tienen `active = true`
- Verifica la consola del navegador (F12) para ver errores
- Verifica que las políticas RLS están configuradas correctamente

### No puedo seleccionar una categoría en el editor
- Verifica que hay categorías activas en Supabase
- Verifica que el hook `useBlogCategories` está funcionando
- Revisa la consola del navegador para ver errores

## 🎉 ¡Listo!

Una vez que ejecutes el SQL en Supabase, las categorías estarán completamente funcionales y Hernán podrá gestionarlas desde el dashboard de Supabase sin necesidad de tocar código.

