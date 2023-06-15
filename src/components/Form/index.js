import { useState } from 'react';

import './style.scss';

function Form({ onFormSubmit }) {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <form id="search-form" className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        <input
          className="form-input"
          type="search"
          id="search-input"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </label>
      <button className="form-action" type="submit">Lancer la recherche</button>
    </form>
  );
}

export default Form;
