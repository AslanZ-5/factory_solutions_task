import PaperWidget from "../widgets/PaperWidget";
import Arrow from "../shared/Arrow/Arrow";
import ArrowBtn from "../shared/ArrowBtn";
import CallBtn from "../shared/CallBtn";
import DateWidget from "../widgets/DateWidget";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <main className="check_container">
        <DateWidget />
        <PaperWidget />
        <Arrow />
      </main>
      <div className="buttons">
        <ArrowBtn />
        <CallBtn />
      </div>
    </div>
  );
};

export default App;
