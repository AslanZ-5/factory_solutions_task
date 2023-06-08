import buttonArrow from "../../assets/32 Arrow.svg";
import "./ArrowBtn.css";
const ArrowBtn = () => {
  return (
    <button className="arrow_btn">
      <img src={buttonArrow} alt="arrow icon" />
    </button>
  );
};

export default ArrowBtn;
