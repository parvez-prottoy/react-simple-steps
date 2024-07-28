import data from "../data/data.json";

const App = () => {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="step-1 active">1</div>
        <div className="step-2">2</div>
        <div className="step-3">3</div>
      </div>

      <p className="message">{data[0]}</p>

      <div className="buttons">
        <button className="previous">Previous</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default App;
