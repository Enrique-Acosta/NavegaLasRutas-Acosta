
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Quiz from './assets/Components/Quiz';  // Cambié 'Quizz' a 'Quiz' para mantener la consistencia
import Puntaje from './assets/Components/Puntaje';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/score" element={<Puntaje />} />
      </Routes>
    </Router>
  );
}

export default App;
