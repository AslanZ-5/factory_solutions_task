import manIcon from "../../assets/32 Man.svg";
import "./CallBtn.css";
const CallBtn = () => {
  return (
    <button className="call_btn">
      <img src={manIcon} alt="man icon" />
      <p className="call_btn__text">Вызов сотрудника</p>
    </button>
  );
};

export default CallBtn;
