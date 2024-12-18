import React, { useState } from "react";

function FormComponent({ articoli, setArticoli }) {
    const [formData, setFormData] = useState({
        titolo: "",
        immagine: "",
        contenuto: "",
        categoria: "",
        tags: {
            tecnologia: false,
            sport: false,
            musica: false,
        },
        stato: false,
    });


}

export default FormComponent;