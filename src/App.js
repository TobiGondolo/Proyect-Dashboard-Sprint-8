import './App.css';
import Dash from './components/Dash';
import './styles/boostrap.css'
import { fetchRequest } from './utils/request';

function App() {
  const handleClickPrueba = async () => {
    const asd = await fetchRequest("/api/users")
    console.log("asd", asd)
  }

  return (
    // <button onClick={handleClickPrueba}>PRUEBA</button>
    <Dash/>
  );
}

export default App;
