import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import classes from "../styles/main.module.css";
import { ProblemContext } from "../context/ProblemContext";

interface AddProblemProps {
  setIsAddingProblem: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewProblem(props: AddProblemProps) {
  const {  addProblem } = useContext(ProblemContext);
  const { setIsAddingProblem } = props;
  const [newProblem, setNewProblem] = useState({
    name: "",
    link: "",
    reference: "",
    difficulty: "",
    timeComplexity: "",
    notes: "",
    qType: "",
  });

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setNewProblem({
      ...newProblem,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + newProblem.difficulty);
    console.log(newProblem);
    setIsAddingProblem(false);
    addProblem(newProblem);
    event.preventDefault();
  };

  return (
    <div className={classes.addBox}>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={newProblem.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="text"
          name="difficulty"
          value={newProblem.difficulty}
          onChange={handleChange}
          placeholder="Difficulty"
        />

        <input
          name="reference"
          type="text"
          value={newProblem.reference}
          onChange={handleChange}
          placeholder="Solution Link"
        />
        <input
          name="timeComplexity"
          type="text"
          value={newProblem.timeComplexity}
          onChange={handleChange}
          placeholder="Time Complexity"
        />

        <input
          name="notes"
          type="text"
          value={newProblem.notes}
          onChange={handleChange}
          placeholder="Notes"
        />

        <input
          name="qType"
          type="text"
          value={newProblem.qType}
          onChange={handleChange}
          placeholder="Type"
        />

        <div className={classes.btnSubmit}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
