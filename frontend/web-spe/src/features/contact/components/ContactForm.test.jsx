import { render, screen } from '@testing-library/react';
import { ContactForm } from './ContactForm';

// Mock simple de SWR Mutation para evitar peticiones reales en el test
vi.mock('swr/mutation', () => ({
  default: () => ({
    trigger: vi.fn(),
    isMutating: false,
  }),
}));

describe('ContactForm', () => {
  it('renderiza los campos correctamente', () => {
    render(<ContactForm />);

    // Verificamos que los inputs y el botón existan en el DOM
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });
});
