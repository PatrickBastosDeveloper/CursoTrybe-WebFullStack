/* eslint-disable react/no-unused-state */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';
import NotFound from '../pages/NotFound';
import Solution from '../pages/Solution';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

export default class Content extends React.Component {
  state = {
    solutions: [
      {
        url: 'hello-world-no-react',
        name: '10.1 Hello World no React',
      },
      {
        url: 'componentes-no-react',
        name: '10.2 Componentes no React',
      },
      {
        url: 'eventos-e-formularios-no-react',
        name: '11.1 Eventos e formulários no React',
      },
    ],
  };

  render() {
    const { solutions } = this.state;
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/calendar" component={ Calendar } />
          <Route path="/live-lectures" component={ LiveLectures } />
          <Route path="/trybe-talks" component={ TrybeTalks } />
          <Route
            exact
            path="/solutions"
            render={ () => (
              <Solutions arrayOfSolutions={ solutions } />
            ) }
          />

          <Route path="/solutions/:solutionUrl" component={ Solution } />

          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}
