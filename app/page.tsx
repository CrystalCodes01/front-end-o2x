"use client";
import React from "react";

export default function Home() {
  // This will break — Next 15 doesn’t support React 19's experimental React.use
  const data = React.use(async () => await Promise.resolve("hi"));

  return (
    <div className="appContainer">
      <div className="container">
        <h1>o2x - Home</h1>
        <div>{data}</div>
      </div>
    </div>
  );
}
