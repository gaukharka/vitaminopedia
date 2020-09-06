import React from "react";
import Entry from "./Entry";
import vitaminopedia from "../vitaminopedia.js";

function createEntry(fruitTerm) {
  return (
    <Entry
      key={fruitTerm.id}
      img={fruitTerm.imgURL}
      name={fruitTerm.name}
      vitamins={fruitTerm.vitamins}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>vitaminopedia</span>
      </h1>
      <h3>
        <span>Your encyclopedia about vitamins in fruits</span>
      </h3>

      <dl className="dictionary">{vitaminopedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
