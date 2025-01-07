import React, { useEffect, useState } from "react";
import FormComponent from "./components/FormComponents";
import CardComponent from "./components/CardComponents";

function App() {
  const [articoli, setArticoli] = useState([]);


  //richiesta backedn

  useEffect(() => {

    fetch('http://localhost:3000/api/articoli')
      .then((response) => response.json())
      .then((data) => {
        setArticoli(data);
      });
  }, []);


  const handleRemove = (index) => {
    const nuoviArticoli = articoli.filter((_, i) => i !== index);
    setArticoli(nuoviArticoli);
  };

  return (
    <div>
      <header>
        <h1>Gestione Articoli</h1>
      </header>
      <main>
        <FormComponent articoli={articoli} setArticoli={setArticoli} />
        <div className="card-list">
          {articoli.map((articolo, index) => (
            <CardComponent
              key={index}
              articolo={articolo}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
