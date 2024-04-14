```js
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

importações necessarias :
npm install -g sass  
npm i @phosphor-icons/react

comando utilizados  :
sass --watch App.scss App.css

Organização dos Components:

components:
|_ Header.tsx
|_ AddItemForm.tsx
|_ ShoppingItems.tsx
|_ ListItem.tsx
|_ Search.tsx
