"use client";

export default function Home() {
  const data = use(async () => await Promise.resolve("hi"));

  return (
    <div className="appContainer">
      <div className="container">
        <h1>o2x - Home</h1>
        <div>{data}</div>
      </div>
    </div>
  );
}
