import { useState, createContext, useContext } from "react";
import { getData } from "./api-get";
import { postData } from "./api-post";

const UserContext = createContext();

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

function MyButtonFunction({ parameter }) {
  const user = useContext(UserContext);
  return (
    <button onClick={postData}>
      {parameter} {user.name}
    </button>
  );
}

function Teste() {
  if ("a" == "a") {
    return <button>Eu sou um botão 2</button>;
  } else {
    return <p>Nops</p>;
  }
}

const products = [
  { title: "Black", id: 1 },
  { title: "Red", id: 2 },
  { title: "Blue", id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

export default function MyApp() {
  const user = { name: "Context" };

  return (
    <div>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyButton />
      <MyButton />
      <Teste />
      <ul>{listItems}</ul>

      <MyButtonApi />
      <MyButtonApiPost />

      <UserContext.Provider value={user}>
        <MyButtonFunction parameter="nome do botão" />
      </UserContext.Provider>
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
