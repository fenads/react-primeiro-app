import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

//eslint-disable-next-line
import { Container, Form, SubimitButtom } from "./styles";
import api from '../../services/api';

export default function Main(){

  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((e)=>{
    e.preventDefault();

    async function submit(){
      setLoading(true);
      try{
        //eslint-disable-next-line
        const response = await api.get(`repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        }

        setRepositorios([...repositorios, data]);
        setNewRepo('');

      }catch(error){
        
        console.log(error);

      }finally{
        setLoading(false);
      }
      
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
        
        <SubimitButtom loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner 
            color="#FFF" 
            size={14}
            />
          ):(
            <FaPlus
            color="#FFF"
            size={14}
            />
          )}
        </SubimitButtom>
      
      </Form>
    </Container>
  )
}