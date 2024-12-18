

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
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: checked,
                }));
            }
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.titolo.trim()) {
            setArticoli([...articoli, formData]);
            setFormData({
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    name="titolo"
                    value={formData.titolo}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Inserisci titolo"
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    name="immagine"
                    value={formData.immagine}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="URL immagine"
                />
            </div>

            <div className="mb-3">
                <textarea
                    name="contenuto"
                    value={formData.contenuto}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Inserisci contenuto"
                    rows="4"
                ></textarea>
            </div>

            <div className="mb-3">
                <select
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="">Seleziona categoria</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="sport">Sport</option>
                    <option value="musica">Musica</option>
                </select>
            </div>

            <div className="mb-3">
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="tecnologia"
                            checked={formData.tags.tecnologia}
                            onChange={handleChange}
                        />{" "}
                        Tecnologia
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="sport"
                            checked={formData.tags.sport}
                            onChange={handleChange}
                        />{" "}
                        Sport
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="musica"
                            checked={formData.tags.musica}
                            onChange={handleChange}
                        />{" "}
                        Musica
                    </label>
                </div>
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    name="stato"
                    checked={formData.stato}
                    onChange={handleChange}
                    className="form-check-input"
                />
                <label className="form-check-label">Pubblica articolo</label>
            </div>

            <button className="btn btn-primary" type="submit">
                Aggiungi
            </button>
        </form>
    );
}

export default FormComponent;