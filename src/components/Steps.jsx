import { useState } from "react";
import data from "../../data/data.json";

const Steps = () => {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`step-1 ${steps >= 1 && "active"}`}>1</div>
            <div className={`step-2 ${steps >= 2 && "active"}`}>2</div>
            <div className={`step-3 ${steps >= 3 && "active"}`}>3</div>
          </div>

          <p className="message">{data[steps - 1]}</p>

          <div className="buttons">
            <button
              disabled={steps <= 1}
              onClick={() => setSteps((prev) => prev - 1)}
              className="previous"
            >
              <span>👈</span> Previous
            </button>
            <button
              disabled={steps >= 3}
              onClick={() => setSteps((prev) => prev + 1)}
              className="next"
            >
              Next <span>👉</span>
              <span>🤓</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
