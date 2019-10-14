import React from "react";
import graph from "../img/graph.png";

const Statistic = () => (
    <div className="statistic">
      <div className="statistic_header">
        <p className="header-text">Услуги</p>
      </div>
      <div className="statistic_graph">
        <img className="graph-image" src={graph} alt="Loading..." />
        <div className="graph_container">
          <p className="graph_container-text">Ручное бронирование</p>
          <p className="graph_container-text">Пакетные туры</p>
          <p className="graph_container-text">Отели</p>
          <p className="graph_container-text numbers">11</p>
          <p className="graph_container-text numbers">3</p>
          <p className="graph_container-text numbers">1</p>
        </div>
      </div>
      <div className="statistic_total">
        <p сlass="total-text">Всего</p>
        <p сlass="total-text">15</p>
      </div>
    </div>
  );

export default Statistic;
