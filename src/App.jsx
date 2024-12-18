import React, { useState } from "react";
import FormComponent from "./components/FormComponents";
import CardComponents from "./components/CardComponents";

function App() {
  const [titoli, setTitoli] = useState([]);

  return (
    <div>
      <header>
        <h1>Lista Articoli</h1>
      </header>
      <main>
        {/* FormComponent gestisce l'aggiunta */}
        <FormComponent titoli={titoli} setTitoli={setTitoli} />

        {/* Mostra la lista dei titoli */}
        <div className="card-list">
          {titoli.map((titolo, index) => (
            <CardComponents
              key={index}
              index={index}
              titolo={titolo}
              titoli={titoli}
              setTitoli={setTitoli}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;