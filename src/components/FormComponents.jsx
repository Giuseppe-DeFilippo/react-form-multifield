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
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            if (name in formData.tags) {
                setFormData((prevData) => ({
                    ...prevData,
                    tags: {
                        ...prevData.tags,
                        [name]: checked,
                    },
                }));
            } else {
                +
                    setFormData((prevData) => ({
                        ...prevData,
                        [name]: checked,
                    }));
            }
        }
    };

}

export default FormComponent;