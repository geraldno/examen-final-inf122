"use client"

import Image from "next/image";
import style from "./marowak.module.css";
import { useState, useEffect } from "react";

function Marowak(){
    const[name,setName] = useState("cagando Nombre")
    const[imagen,setImagen] = useState("/vercel.svg");
    const[id,setId] = useState ("cargando Id");
    const[type,setType] = useState("");
    const[tamaño, setTamaño] = useState("tamaño"); 
    const[peso,setPeso] = useState("peso");
    const[habilidad1,setHabilidad1] = useState("habi");
    const[habilidad2,setHabilidad2] = useState("habi2");
    const[vida,setVida] = useState("vida");
    const[ataque,setAtaque] = useState("ataque");
    const[defensa,setDefensa] = useState("defensa");
    const[speed,setSpeed] = useState("speed");

    const url = "https://pokeapi.co/api/v2/pokemon/marowak";

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {setImagen(data.sprites.front_default),
        setName(data.name),
        setId(data.id),
        setType(data.types[0].type.name),
        setTamaño(data.height),
        setPeso(data.weight),
        setHabilidad1(data.abilities[0].ability.name),
        setHabilidad2(data.abilities[1].ability.name),
        setVida(data.stats[0].base_stat)
        setAtaque(data.stats[1].base_stat)
        setDefensa(data.stats[2].base_stat)
        setSpeed(data.stats[3].base_stat)
        })
    },[])

    return(
        <div className={style.padre}>
            <h1 className={style.mypok}>My Pokemon  </h1>
            <div className={style.pokemon}>
                <p className={style.name}>{name}</p>
                <p className={style.ide}>#{id}</p>
                <Image src={imagen} width={325} height={325}/>
                <div className={style.info}>
                <p className={style.abut}>About</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="2" viewBox="0 0 45 2" fill="none">
                <path d="M1 1H43.5" stroke="#26367C" stroke-width="2" stroke-linecap="round"/></svg><br></br>
                <p className={style.pes}>type&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </p>{type}<br></br>
                <p className={style.pes}>Height&nbsp; &nbsp;&nbsp; </p>{tamaño}m<br></br>
                <p className={style.pes}>Weight &nbsp;</p> {peso} Kg<br></br>
                <p className={style.pes}>Abilities&nbsp;&nbsp; </p> {habilidad1}, {habilidad2}<br></br>
                </div>
                <div className={style.stats}>
                    <p className={style.stot}>Stats</p>
                    <p className={style.pes}>HP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> {vida} <br></br>
                    <p className={style.pes}>Attack &nbsp;&nbsp;</p> {ataque}<br></br>
                    <p className={style.pes}>Defense </p> {defensa}<br></br>
                    <p className={style.pes}>Speed&nbsp;&nbsp;&nbsp; </p>  {speed}<br></br>
                </div>
            </div>
        </div>
    );
}

export default Marowak;