import { useState } from "react";
import { getData } from "./api-get";
import { postData } from "./api-post";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicado {count} vezes</button>;
}

function MyButtonApi() {
  return <button onClick={getData}>Teste GET</button>;
}

function MyButtonApiPost() {
  return <button onClick={postData}>Teste POST</button>;
}

function Teste() {
  if ("a" == "a") {
    return <button>Eu sou um botãoaa</button>;
  } else {
    return <p>Nops</p>;
  }
}

const products = [
  { title: "Repolho", id: 1 },
  { title: "Alho", id: 2 },
  { title: "Maçã", id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyButton />
      <MyButton />
      <Teste />
      <ul>{listItems}</ul>

      <MyButtonApi />
      <MyButtonApiPost />
    </div>
  );
}

/* opção 2
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contadores que são atualizados juntos</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicado {count} vezes
    </button>
  );
}

*/
