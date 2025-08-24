// api-get.js
export async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    throw new Error("teste2 deu erro");
    console.log("erros");
  } catch (error) {
    console.error(error);
  }
}
