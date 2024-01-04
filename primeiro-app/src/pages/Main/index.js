import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus } from 'react-icons/fa'

//eslint-disable-next-line
import { Container, Form, SubimitButtom } from "./styles";
import api from '../../services/api';

export default function Main(){

  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback((e)=>{
    e.preventDefault();

    async function submit(){
      //eslint-disable-next-line
      const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        }

      setRepositorios([...repositorios, data]);
      setNewRepo('');
    }

    submit();

  }, [newRepo, repositorios]);

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