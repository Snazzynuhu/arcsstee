import React from 'react';
import GraduatesList from './GraduatesList';
import SearchForm from './SearchForm';
import { data } from './data';

const Graduates = () => {
  const [list, setList] = React.useState(data);

  const handleSearch = (payload) => {
    setList(payload);
  }

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      <GraduatesList list={list} />
    </main>
  );
}

export default Graduates