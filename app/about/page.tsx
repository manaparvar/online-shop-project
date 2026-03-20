async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store", // معادل getServerSideProps
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function About() {
  const data = await getData();

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.title}</p>
    </div>
  );
}
