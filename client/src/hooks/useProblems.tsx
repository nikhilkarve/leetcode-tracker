import { useState } from "react";
import { ProblemProps } from "../components/ProblemList";
import MockProblems from '../mocks/problem-data.json'


const ProblemsMocks = MockProblems.problemsElements

export default function useProblems() {
  const [problemList, setProblemList] = useState<ProblemProps[]>([]);

  function getProblemsFromLocalStorage() {
    const problemListLocal: ProblemProps[] = JSON.parse(
      localStorage.getItem("problemList") || JSON.stringify(ProblemsMocks as ProblemProps[])
    );
    setProblemList(problemListLocal);
  }

  function addProblem(newProblem: ProblemProps) {
    const updatedProblemList = [...problemList, newProblem];
    setProblemList(updatedProblemList);
    localStorage.setItem("problemList", JSON.stringify(updatedProblemList));
  }

  function removeProblem(problemToRemove: ProblemProps) {
    const updatedProblemList = problemList.filter(
      (problem) => problem.name !== problemToRemove.name
    );
    // TODO Finish the function
  }

  return { problemList, getProblemsFromLocalStorage, addProblem };
}
