import React from 'react';
import './App.css';
import Table from './components/Table';
import Inputs from './components/Inputs';
import PlanetProvider from './context/PlanetProvider';
import Filter from './components/Fillter';
import Header from './components/Header';

function App() {
  return (
    <PlanetProvider>
      <Header />
      <Inputs />
      <Filter />
      <Table />
    </PlanetProvider>
  );
}

export default App;
