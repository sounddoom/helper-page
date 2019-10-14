import React from "react";
import profileImage from "../img/profileImage.png";

const Wrapper = () => (
    <div className="wrapper_info">
      <div className="info">
        <div>
          <img className="info_image" src={profileImage} alt="Loading..." />
        </div>
        <div className="info_container">
          <div className="info_about">
            <p className="info_name">Вероника Ростова</p>
            <p className="info_job-title">Менеджер по продажам</p>
          </div>
          <div className="info_slogan">
            <p className="info_slogan-text">
              Подберу для вас самые лучшие предложения.
            </p>
            <p className="info_slogan-text">Мои услуги абсолютно бесплатны</p>
          </div>
        </div>
      </div>
    </div>
  );


export default Wrapper;
