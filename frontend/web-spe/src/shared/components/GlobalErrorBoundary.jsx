import { ErrorBoundary } from 'react-error-boundary';

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="p-8 m-4 bg-red-50 text-red-900 border border-red-200 rounded-lg shadow-sm font-sans"
    >
      <h2 className="text-lg font-bold mb-2">Algo salió mal en esta sección de la aplicación</h2>
      <p className="text-sm font-mono bg-white p-4 rounded mb-4 overflow-x-auto text-red-600">
        {error.message}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Intentar recuperar
      </button>
    </div>
  );
}

export const GlobalErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        // Lógica para reiniciar el estado si es necesario
      }}
    >
      {children}
    </ErrorBoundary>
  );
};
