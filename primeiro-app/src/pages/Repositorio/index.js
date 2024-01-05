import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Container, Owner, Loading, BackButton } from './styles';
import { FaArrowLeft } from 'react-icons/fa'
import api from '../../services/api';

export default function Repositorio(){
  const { repositorio } = useParams();
  const [reposit, setReposit] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load(){

      const nomeRepo = decodeURIComponent(repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params:{
            state:'open',
            per_page:5
          }
        })
      ]);

      setReposit(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);

    }

    load();

  }, [repositorio]);

  if(loading){
    return(
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    )
  }

  return(
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30}/>
      </BackButton>
      
      <Owner>
        <img 
        src={reposit.owner.avatar_url} 
        alt={reposit.owner.login}
        />
        <h1>{reposit.name}</h1>
        <p>{reposit.description}</p>
      </Owner>
    </Container>
  )
}