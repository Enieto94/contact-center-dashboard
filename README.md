This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements
<b>Node.js 20.x</b> or higher <br> 
<b>Next.js 13.x</b> or higher
## Getting Started

```bash
git clone https://github.com/Enieto94/contact-center-dashboard.git

npm i
```
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Explicaciones

## Sustentación del desarrollo
Se utilizó JSX para manejar más eficiencia en los componentes
Se trabajó con functional components por su practicidad y mayor con mejores prácticas de código para su legibilidad.

### Estructuración de componentes
Los componentes se estructuraron como lista de los agentes y de clientes con sus respectivos filtros.
Se ubicaron en este directorio ya que son elementos que son susceptibles a ser reutilizados y añadir alguna lógica diferente pero basada en la funcionalidad.

### Diferencias modos de renderizar
Podemos renderizar de varias maneras, bien sea con renderizado condicional (sentencias if else o operador ternario), Hooks, props y con funciones declaradas en el return statement.
### Diferencias entre una MPA y SPA
Las MPA por sus siglas en inglés son Multipage application lo que permite tener varias páginas con diferente contenido y enlazadas entre cada una, son generadas desde el servidor.

Las SPA por sus siglas en inglés Single Page Application es donde todo el contenido, estilos y lógica se almacenan en una sola página sin necesidad de recargar la página, aquí es donde entra en juego la renderización y el uso del DOM. Es muy flexible.
### Cómo asegurarse que el frontend estuviera correctamente conectado con el backend
Para asegurarnos de que el frontend esté correctamente conectado con el backend debemos asegurarnos de que nuestro backend funciona con postman. una vez hecho esto podemos consumir nuestros servicios con fetch hacia los endpoints creados en el backend desde nuestro frontend.


