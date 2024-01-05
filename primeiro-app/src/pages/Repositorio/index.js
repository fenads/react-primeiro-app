import React from "react";
import { useParams } from 'react-router-dom';

export default function Repositorio(){
  const { repositorio } = useParams();
  return(
    <h1 style={{color:'#FFF'}}>
      {decodeURIComponent(repositorio) }
    </h1>
  )
}