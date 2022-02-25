import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router } from 'react-router-dom';
import renderWithRouter from './renderWithRouter'

describe('Testando Nosso Portfolio', () => {
  test('Verificar se na página inicial aparece "sobre mim" e navegar para projetos', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headingEl = screen.getByRole('heading', {
      name: 'Minha Página',
      level: 1,
    });
    expect(headingEl).toBeInTheDocument();

    const projectsLinkEl = screen.getByRole('link', { name: 'Projetos' });
    expect(projectsLinkEl).toBeInTheDocument();

    userEvent.click(projectsLinkEl);

    const projectsHeadingEl = screen.getByRole('heading', {
      name: 'Meus Projetos',
      level: 1,
    });
    expect(projectsHeadingEl).toBeInTheDocument();
  });

  test('Verificar se na página inicial aparece "sobre mim" e navegar para comentários', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headingEl = screen.getByRole('heading', {
      name: 'Minha Página',
      level: 1,
    });
    expect(headingEl).toBeInTheDocument();

    const commentsLinkEl = screen.getByRole('link', { name: 'Comentários' });
    expect(commentsLinkEl).toBeInTheDocument();

    userEvent.click(commentsLinkEl);

    const commentsHeadingEl = screen.getByRole('heading', {
      name: 'Página de Comentários',
      level: 1,
    });
    expect(commentsHeadingEl).toBeInTheDocument();
  });

  test('Exibe a página não encontrada quando navegar para uma rota inexistente', () => {
    
    const {history} = renderWithRouter(<App />)

    history.push('/rota-inexistente')

    const notFoundHeadingEl = screen.getByRole('heading', {level: 1, name: /Nada Encontrado/i})
    expect(notFoundHeadingEl).toBeDefined();

  });

  test('Entra na página comentário e consegue comentar', () => {

    const {history} = renderWithRouter(<App />)
    history.push('/comments')

    const inputEl = screen.getByRole('textbox')
    const buttonEl = screen.getByRole('button')

    userEvent.type(inputEl, 'xablau')
    userEvent.click(buttonEl)
    const commentEl = screen.getByText('xablau')

  })
});
