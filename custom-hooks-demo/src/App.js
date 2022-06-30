import { useHorario } from './useHorario';

function App() {
  const horarioAtual = useHorario('MMMM Do YYYY, h:mm:ss a');

  return (
      <div>
          <h2>{horarioAtual}</h2>
      </div>
  );
}

export default App;
