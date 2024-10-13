import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import preguntasData from '../preguntas/preguntas.json'; 
import LeeSinQ from '../img/Lee_Sin_Q.webp'; 

const images = {
  "Lee_Sin_Q.webp": LeeSinQ,
};

const Quiz = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarPuntaje, setMostrarPuntaje] = useState(false);
  const navigate = useNavigate();

  const manejarSeleccionRespuesta = (isCorrect) => {
    if (isCorrect) {
      setPuntaje(puntaje + 1);
    }

    const siguientePregunta = preguntaActual + 1;
    if (siguientePregunta < preguntasData.length) {
      setPreguntaActual(siguientePregunta);
    } else {
      setMostrarPuntaje(true);
    }
  };

 
  useEffect(() => {
    if (mostrarPuntaje) {
      navigate("/score", { state: { score: puntaje, totalQuestions: preguntasData.length } });
    }
  }, [mostrarPuntaje, navigate, puntaje]);

  return (
    <div className="quiz">
      <h1>Quiz de LoL</h1>
      <div className="question-section">
        <h2>{preguntasData[preguntaActual].pregunta}</h2>
        {preguntasData[preguntaActual].img && (
          <img
            src={images[preguntasData[preguntaActual].img]} 
            alt="Imagen de la pregunta"
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </div>
      <div className="answer-section">
        {preguntasData[preguntaActual].opciones.map((opcion, index) => (
          <button key={index} onClick={() => manejarSeleccionRespuesta(opcion.isCorrect)}>
            {opcion.respuesta}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;