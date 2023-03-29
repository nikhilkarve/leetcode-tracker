import React, { createContext } from 'react'
import useProblems from '../hooks/useProblems';

type Props = {
    children: React.ReactNode;
  };

export const ProblemContext = createContext(null as any)

export default function ProblemProvider({children}:Props) {

    const {problemList, addProblem, getProblemsFromLocalStorage} = useProblems()

  return (
    <ProblemContext.Provider value={{problemList, addProblem, getProblemsFromLocalStorage}}>
        {children}
    </ProblemContext.Provider>
  )
}
