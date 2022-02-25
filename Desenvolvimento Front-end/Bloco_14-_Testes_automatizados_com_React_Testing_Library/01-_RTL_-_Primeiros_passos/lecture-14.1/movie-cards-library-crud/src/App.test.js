import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

describe('Testando Movie Cards Library Crud', () => {
  test('O título do card Kingsglaive aparece na tela', async () => {
    render(<App />);

    // Esparar o loading sair da tela.
    await waitForElementToBeRemoved(screen.getByText('Carregando...'));

    const headingEl = screen.getByText('Kingsglaive');
    expect(headingEl).toBeInTheDocument();
  });

  it('O texto Carregando... aparece na tela', () => {
    render(<App />);
    const loadingEl = screen.getByText('Carregando...');
    expect(loadingEl).toBeInTheDocument();
  });

  test('Quando clicar em "ver detalhes" a nova página é renderizada', async () => {
    render(<App />);

    // Esparar o loading sair da tela.
    // await waitForElementToBeRemoved(screen.getByText('Carregando...'));

    const detailsEl = await screen.findByTestId('KingsglaiveDetails');
    expect(detailsEl).toBeInTheDocument();

    userEvent.click(detailsEl);

    const subtitleEl = await screen.findByText(/Subtitle: Final Fantasy XV/i);
    expect(subtitleEl).toBeInTheDocument();

    const elementoNaoEstaNaTela = screen.queryByText(/Spirits Within/i);
    expect(elementoNaoEstaNaTela).not.toBeInTheDocument();
  });
});
