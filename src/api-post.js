// Data sent from the client to the server
const body = {
  title: "foo",
  body: "bar",
  userId: 1,
};

export async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "User-Agent": "undici-stream-example",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
