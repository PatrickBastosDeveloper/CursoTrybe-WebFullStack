import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import pokemonMock from './pokemonMock';

describe('Testando a Aplicação', () => {
  test('O título e a imagem de logo aparecem na tela', () => {
    // Acessar
    render(<App />);

    const logoEl = screen.getByRole('img', { name: 'Logo' });
    const titleEl = screen.getByRole('heading', {
      name: /Pesquise um Pokemon/i,
      level: 3,
    });
    // Interagir

    // Testar
    expect(logoEl).toBeInTheDocument();
    expect(titleEl).toBeInTheDocument();
  });

  test('Exibe o botão pesquisar e o input de texto', () => {
    // Acessar
    render(<App />);
    const buttonEl = screen.getByRole('button', { name: 'Pesquisar' });
    const inputEl = screen.getByRole('textbox');

    // Testar
    expect(buttonEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();

    // screen.logTestingPlaygroundURL()
  });

  test('É possível digitar no campo de pesquisa', () => {
    // Acessar
    render(<App />);
    const inputEl = screen.getByRole('textbox');

    // Interagir
    expect(inputEl).toHaveValue('');
    userEvent.type(inputEl, 'lalaland');

    // Testar
    expect(inputEl.value).toBe('lalaland');
  });

  test('Exibe o pokemon e o card quando clicamos no botão pesquisar', async () => {


    //   global.fetch = async function() {
    //     return {json: async function() {
    //         return {cards: [{name: 'Lalaland Pokemon', imageUrl: 'https://app.betrybe.com/static/media/front-end.3f3c4418.svg'}]}
    //     } }
    // }

    // const fetchMock = async function () {
    //   return {
    //     json: async function () {
    //       return pokemonMock;
    //     },
    //   };
    // };

  
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(pokemonMock),
    });

    // Acessar
    render(<App />);
    const inputEl = screen.getByRole('textbox');
    const buttonEl = screen.getByRole('button', { name: 'Pesquisar' });

    // Interagir
    userEvent.type(inputEl, 'pikachu');
    userEvent.click(buttonEl);

    const pokemonHeading = await screen.findByRole('heading', {
      name: /Pikachu-ex/i,
    });

    expect(pokemonHeading).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);


    // global.fetch.mockRestore()

    jest.restoreAllMocks()

  });



});
