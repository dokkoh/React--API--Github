import './style.scss';


import Card from '../Card';


function Results({ repoList }) {
  if (repoList.length === 0) {
    return <p>Aucun résultat trouvé.</p>;
  }

  return (
    <div id="repos">
      {
        repoList.map((value) => (
          <Card
            key={value.id}
            title={value.full_name}
            img={value.owner.avatar_url}
            desc={value.description}
            link={value.html_url}
          />
        ))
      }

    </div>
  );
}

export default Results;
