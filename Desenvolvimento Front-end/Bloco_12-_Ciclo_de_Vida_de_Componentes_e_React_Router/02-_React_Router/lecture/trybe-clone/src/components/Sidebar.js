import React from 'react';
import { Link } from 'react-router-dom';

// Adicionar links no sidebar ✅
// Fazer com que os links renderizem os respectivos componentes
class Sidebar extends React.Component {
  render() {
    return (

      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          <Link to="/">Home - Dashboard</Link>
          <Link to="/calendar">Agenda</Link>
          <Link to="/live-lectures?name=lalaland">Aulas ao Vivo</Link>
          <Link to="/trybe-talks">Trybe Talks</Link>
          <Link to="/solutions">Gabaritos</Link>
        </nav>
      </section>

    );
  }
}

export default Sidebar;
