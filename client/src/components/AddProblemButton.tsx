import { useState } from "react";
import NewProblem from "./NewProblem";
import classes from "../styles/main.module.css";

const AddProblemButton = () => {
  const [isAddingProblem, setIsAddingProblem] = useState(false);
  const clickHandler = () => {
    setIsAddingProblem(true);
  };

  return isAddingProblem ? (
    <div>
      <NewProblem setIsAddingProblem={setIsAddingProblem} />
    </div>
  ) : (
    <div>
      <div className={classes.btn}>
        <button onClick={clickHandler}>Add Problem</button>
      </div>
    </div>
  );
};

export default AddProblemButton;
