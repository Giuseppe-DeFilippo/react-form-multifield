import React from "react";

function CardComponents({ titolo, index, titoli, setTitoli }) {
    const handleRemove = () => {
        //l underscore serve per far capire al codice di non far utilizzare il vlore ma solo l indice
        const nuoviTitoli = titoli.filter((_, i) => i !== index); // Filtra l'articolo da rimuovere
        setTitoli(nuoviTitoli);
    };

    return (
        <div className="card mb-2" style={{ width: "18rem" }}>
            <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{titolo}</h5>
                <button className="btn btn-danger btn-sm" onClick={handleRemove}>
                    Elimina
                </button>
            </div>
        </div>
    );
}

export default CardComponents;