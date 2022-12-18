import React from "react";
import "./Botoes.css";
  
export default function Botoes(props) {
  /* criar a função do botao iniciar atribuindo o click a rodar a função */
  const BotaoIniciar = (
    <div className="botao" id="botao1"
         onClick={props.Iniciar}>
      Iniciar
    </div>
  );

  /* criar a função do botao zerar atribuindo o click a rodar a função */
  const BotaoZerar = (
    <div className="botao" id="botao2"
         onClick={props.Zerar}>
      Zerar
    </div>
  );
  
  return (
    /* retorna a div com os dois botoes */
    <div className="controleBotao">
      <div>{BotaoIniciar}</div>
      <div>{BotaoZerar}</div>
     
    </div>
  );
}