



// FirstNavBar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Importante para extender las capacidades de Jest-DOM
import FirstNavBar from './FirstNavBar';

test('renders FirstNavBar component', () => {
  const { getByText, getByRole } = render(<FirstNavBar />);
  
  // Asegúrate de que el texto y los elementos específicos estén presentes en el renderizado.
  const addressEmailElement = getByText(/Matamoros #333 Col. Centro || correo@example.com/i);
  expect(addressEmailElement).toBeInTheDocument();

  const locationIconElement = getByRole('img', { name: /Location Icon/i });
  expect(locationIconElement).toBeInTheDocument();

  // Ajusta estas aserciones según las características específicas de tu componente.
  // Puedes agregar más aserciones según sea necesario.
});
