import React, { useState } from "react";
import "./Geral.css";
import "./Timer"
import ControlButtons from "./Botoes";
import Timer from "./Timer";
  
function Geral() {
  /* cria a contante para dizer se o cronometro esta ativo e pausado */
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  /* se time esta ativo e pausado for falso */
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const Iniciar = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  
  const Zerar = () => {
    setIsActive(false);
    setTime(0);
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        Iniciar={Iniciar}
        Zerar={Zerar}
      />
    </div>
  );
}
  
export default Geral;