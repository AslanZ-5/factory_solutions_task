import "./PaperWidget.css";
const PaperWidget = () => {
  return (
    <div className="check">
      <div className="slot">
        <div className="inner_slot"></div>
      </div>
      <div className="paper">
        <div className="description">
          <div className="price">
            <h4>Стоимость покупок</h4>
            <p>820,95 ₽</p>
          </div>
          <p className="intruction">
            Приложите <br />
            или прокатайте карту
          </p>
        </div>
        <ul className="angles">
          <div className="gradient"></div>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default PaperWidget;
