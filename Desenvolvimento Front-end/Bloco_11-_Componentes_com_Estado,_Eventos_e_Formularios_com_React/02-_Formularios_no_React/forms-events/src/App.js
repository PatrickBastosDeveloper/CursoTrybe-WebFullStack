import React from 'react';
import logo from './trybe-logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt="" srcSet="" />
      </header>
      <main className="app">
        <LoginForm />
        <RegisterForm />
      </main>
    </div>
  );
}

export default App;
