import React, { useEffect } from 'react';
import { useState } from 'react';
import NewProblem from './NewProblem';
import ProblemList from './ProblemList';
import myData from '../resources/problem-data.json';
import classes from '../styles/main.module.css';

const AddProblemButton = () => {
	const [newProblem, setProblem] = useState(false);
	const onSubmit = () => {
		setProblem(!newProblem);
	};

	const [addProblem, setAddProblem] = useState({});

	const testObj = {
		problems: [
			// 	{
			// 		name: 'Two Sum',
			// 		link: 'https://leetcode.com/problems/two-sum/',
			// 		reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			// 		difficulty: 'Easy',
			// 	},
			// 	{
			// 		name: 'Two Sum',
			// 		link: 'https://leetcode.com/problems/two-sum/',
			// 		reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			// 		difficulty: 'Easy',
			// 	},
			// 	{
			// 		name: 'Two Sum',
			// 		link: 'https://leetcode.com/problems/two-sum/',
			// 		reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			// 		difficulty: 'Easy',
			// 	},
			// 	{
			// 		name: 'Two Sum',
			// 		link: 'https://leetcode.com/problems/two-sum/',
			// 		reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			// 		difficulty: 'Easy',
			// 	},
			//
		],
	};

	let newObject = JSON.parse(window.localStorage.getItem('testObj'));

	const [problemList, setList] = useState([]);

	console.log(newObject);

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
				<div className={classes.btn}>
					<button onClick={onSubmit}>Add Problem</button>
				</div>
				<ProblemList problems={problemList} />
			</div>
		);
	}
};

export default AddProblemButton;
