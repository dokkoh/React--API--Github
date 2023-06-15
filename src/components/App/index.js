import { useEffect, useState } from 'react';
import Form from '../Form';
import Results from '../Results';



import './style.scss';

function App() {

  const [repoList, setRepoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (term) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=${term}`);
      const data = await response.json();
      setRepoList(data.items);
    } catch (error) {
      console.error('Erreur:', error);
    }
    setIsLoading(false);
  };

  const handleFormSubmit = (term) => {
    if (term.trim() !== '') {
      fetchData(term);
    }
  };

  useEffect(() => {
    fetchData('react');
  }, []);


  return (
    <>
      <Form onFormSubmit={handleFormSubmit}/>
      {isLoading && <p>Veuillez patienter...</p>}
      {!isLoading && <Results repoList={repoList} />}
    </>
  );
}

export default App;
