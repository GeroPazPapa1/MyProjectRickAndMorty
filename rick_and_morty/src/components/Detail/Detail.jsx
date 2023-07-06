import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

// "/detail/:id"
export default function Detail() {
    const { id } = useParams(); // {id: 300} // hooks

    const [pjDetail, setPjDetail] = useState({}); // hooks //tiene q ser antes del return xq es ahi donde puedes ejectuarlo

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
           if (data.name) {
              setPjDetail(data);
           } else { 
              window.alert('No hay personajes con ese ID');
           }
        },[]); //no ovidar nunca el array xq si no se rompe y repite 1000 veces y no podes usar la api hasta el otro dia
 
        //desmontaje
        return () => {
        //ejecutar cuando se desmonte
        console.log("me desmonton, adios!");
        };
     }, [id]);

    return (
        <div>
            <h3>{pjDetail.name && pjDetail?.name}</h3>
            <h5>{pjDetail.status ? pjDetail?.status : ":( no hay status"}</h5>
            <img src={pjDetail.image} alt={pjDetail?.name}/>
            <section>
                <span>Especie{pjDetail?.species}</span>
                <span>♀{pjDetail?.gender}</span>
                <span>🌍{pjDetail?.origin?.name}</span>
            </section>
        </div>
    );
}

// [] montaje
// [id] update
// () => return () => {} desmontaje

// var aux = "messi"
// var nuevo = aux || "esto"

//var nueva = aux && aux

// condicion ? true : false
// <span> 🌍 {pjDetail.origin?.name}</span>  PREGUNTA ANTES DE ACCEDER