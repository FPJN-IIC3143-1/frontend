# MealsBuddy, saludable es ser bud

MealsBuddy es una aplicación web que te ayuda a llevar un control de tus comidas diarias, con el fin de que puedas llevar una alimentación más saludable.

#### Tecnologías utilizadas
- Remix (react based) + JS + npm + Vite + Tailwind CSS 
- Auth0 
- Figma
- GitHub Pages (deployment)

#### Extensiones para Tailwind CSS en VSCode:
- Tailwind CSS IntelliSense: autocompletado de clases de Tailwind
- [PostCSS Language Support](https://www.youtube.com/watch?v=tGSuml1lbUY): Tailwind es un PostCSS plugin. Elimina errores de sintaxis y da soprote a los archivos CSS ("unknown at-rule @tailwind") 

Esto dentro de una arquitectura MVC que levanta una PWA.

### Correr el proyecto

Instalar las dependencias con 

```sh
npm install --legacy-peer-deps
```

Correr proyecto con (con vite)

```sh
npm run dev
npm run dev --reset-cache

```

### Remix Framework

#### Creación app
Al crear con `npx create-remix@latest` se crea con TS, para hacerlo con JS `npx create-remix@latest --template remix-run/remix/templates/remix-javascript` lo cual se encuentra a sección Guides>Templates en la documentación

#### Deployment

Build your app for production: `npm run build`. Then run the app in production mode: `npm start`

#### DIY Deployment

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

#### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
