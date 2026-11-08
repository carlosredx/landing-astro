# YO.md — guía corta para mi proyecto

## 1. Herramientas necesarias

Instalar Node.js 24 o superior y Git para Windows si aún no están instalados. Para instalar `pnpm` (el gestor de paquetes del proyecto), ejecutar:

```powershell
npm install --global pnpm
```

Luego, comprobar que las versiones estén correctamente instaladas:

```powershell
node --version
git --version
pnpm --version
```

## 2. Abrir la carpeta correcta

La carpeta del proyecto está en el Escritorio. Abrir PowerShell y ejecutar la ruta completa:

```powershell
cd "C:\Users\carlo\OneDrive\Desktop\Proyecto Astro UTEM - Ingenieria en Informatica"
```

Comprobar que quedé en la raíz del proyecto:

```powershell
Get-Location
Get-ChildItem
```

En la lista deben aparecer `package.json`, `pnpm-lock.yaml` y la carpeta `src`. Los comandos siguientes se ejecutan aquí, no dentro de `src`.

## 3. Descargar las dependencias del proyecto

```powershell
pnpm install
```

Para abrir la página localmente:

```powershell
pnpm dev
```

Abrir la dirección que muestra Astro en la terminal, normalmente `http://localhost:4321/`. Para detenerlo, presionar `Ctrl+C` en esa terminal.

## 4. Activar Git y conectar mi repositorio

Ejecutar una sola vez, desde la raíz del proyecto:

```powershell
git init
git branch -M main
git remote add origin https://github.com/carlosredx/landing-astro.git
git remote -v
git status
```

`git remote -v` debe mostrar `https://github.com/carlosredx/landing-astro.git` como dirección de `origin`.

## 5. Guardar y subir los archivos al repositorio

```powershell
git add .
git commit -m "Inicio del proyecto UTEM"
git push -u origin main
```

GitHub puede pedir iniciar sesión.