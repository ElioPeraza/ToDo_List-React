import React, { useState } from "react";



const NombresList = () => {
    const [inputValueNombre, setInputValueNombre] = React.useState("");
    const [arrayNombres, setArrayNombres] = React.useState([]);


    const agregarNombre = (tecla) => {
        if (tecla == "Enter") {
            if (inputValueNombre != "") {
                let array_temporal = [...arrayNombres];
                array_temporal.push(inputValueNombre);
                setArrayNombres(array_temporal);
                setInputValueNombre("");
                console.log(arrayNombres);
            } else {
                alert("Debes de ingresar un nombre");
            }
        }
    };
    // 
    const eliminarNombre = (indice) => {
        const arrayTemporal = [
            ...arrayNombres.slice(0, indice),   //copia antes del indice
            ...arrayNombres.slice(indice + 1)   //copia despues del indice
        ];
        setArrayNombres(arrayTemporal);
    };

    return (
        <div className="contenedor">
            <h1>ToDo List</h1>
            <input 
                type="text"
                id="nombre"
                placeholder="What need to do?"
                onChange={(e) => setInputValueNombre(e.target.value)}
                onKeyDown={(e) => {
                    agregarNombre(e.key);
                }}
                value={inputValueNombre}
            />
            {!arrayNombres || arrayNombres.length == 0 ? (
                <p>No hay nombres agregados</p>
            ) : (
                <ol>
                    {arrayNombres.map((nombre, indice) => (
                        <li key={indice}>{nombre}
                        <span onClick ={() => eliminarNombre(indice)}> X </span>
                        </li>
                        
                    ))}
                </ol>
            )}
        </div>
    );
};


  export default NombresList;