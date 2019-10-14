import React from "react";

const Container = props => {
  const { data } = props;
  return (
    <div className="messages">
      {data.length ? (
        data.map((el, i) => (
          <div key={i} className="messages_block">
            <div className="messages_block-name">
              <h1 className="messages_block-header">Имя</h1>
              <p className="messages_block-date">5 марта 2019</p>
            </div>
            <div className="messages_block-container">
              <p className="messages_block-text">{el}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="messages_miss">
          <div className="messages_miss-text">Нет сообщений</div>
        </div>
      )}
    </div>
  );
};
export default Container;
