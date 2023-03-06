import React from 'react';
import { useState } from 'react';
import NewProblem from './NewProblem';
import ProblemList from './ProblemList';
import myData from '../resources/problem-data.json';

const AddProblemButton = () => {
	const [newProblem, setProblem] = useState(false);
	const onSubmit = () => {
		setProblem(!newProblem);
	};

	const [addProblem, setAddProblem] = useState({});
	const [problemList, setList] = useState(myData.problems);

	if (newProblem)
		return (
			<div>
				<NewProblem
					stateVar={setProblem}
					setAddProblem={setAddProblem}
					setList={setList}
					problemList={problemList}
				/>
				<ProblemList problems={problemList} />
				{console.log(addProblem)}
			</div>
		);
	else {
		return (
			<div>
				<button onClick={onSubmit}>Add Problem</button>
				<ProblemList problems={problemList} />
			</div>
		);
	}
};

export default AddProblemButton;
