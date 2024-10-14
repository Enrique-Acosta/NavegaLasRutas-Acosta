import { Link, useLocation } from "react-router-dom";

const Puntaje = () => {
  const location = useLocation();
  const { score = 0, totalQuestions = 0 } = location.state || {}; 

  return (
    <div className="score-section">
      <h1>¡Fin del Quiz!</h1>
      <p>Tu puntuación es {score} de {totalQuestions}.</p>
      <Link to="/">Volver a intentar</Link>
    </div>
  );
};

export default Puntaje;
