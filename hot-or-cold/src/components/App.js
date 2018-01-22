import React from "react";
import Header from "./Header";
import Form from "./Form";
import Guess from "./Guess";

export default function App() {
  return (
    <header class="react-header">
      <h1 className="title">
        <Header text="Hot and Cold!" />
      </h1>
      <section id="react-game">
        <h2>Make your Guess!</h2>
        <Form/>
        <Guess/>
      </section>
    </header>
  );
}
