import React, { useState } from "react";
import { FaGithub, FaPlus } from 'react-icons/fa'

//eslint-disable-next-line
import { Container, Form, SubimitButtom } from "./styles";

export default function Main(){

  const [newRepo, setNewRepo] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    console.log(newRepo);
  }

  function handleinputChange(e){
    setNewRepo(e.target.value);
  }

  return(

    <Container>
      <h1>
        <FaGithub
        size={25}
        />
        Meus Repositorios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Adicionar Repositorio"
        value={newRepo}
        onChange={handleinputChange}
        />
        
        <SubimitButtom>
          <FaPlus
          color="#FFF"
          size={14}
          />
        </SubimitButtom>
      
      </Form>
    </Container>
  )
}