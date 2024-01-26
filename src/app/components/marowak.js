"use client"

import Image from "next/image";
import style from "./marowak.module.css";
import { useState } from "react";

function Marowak(){
    const[imagen,setImagen] = useState("/vercel.svg");
    const url = "https://pokeapi.co/api/v2/pokemon/marowak";

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setImagen(data.sprites.front_default),
        })
    },[])

    return(
        <div className={style.padre}>
            <h1>My Pokemon  </h1>
            <div className={style.pokemon}>
                <p>Marowak</p>
                <Image {imagen}/>
            </div>
        </div>
    );
}

export default Marowak;