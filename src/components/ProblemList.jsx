import React from 'react';
import classes from '../styles/main.module.css';
import { useState } from 'react';
import myData from '../resources/problem-data.json';
const ProblemList = (props) => {
	console.log(myData);
	const [checked, setChecked] = useState(false);
	// const problems = props.problems;
	let problems =
		JSON.parse(window.localStorage.getItem('problemListLocal')) || [];

	console.log(props.addThisProblem);
	if (props.addThisProblem) {
		console.log(problems.push(props.addThisProblem));
	}

	const handleChange = () => {
		setChecked();
	};

	return (
		<div className='listContainer'>
			<table>
				<tr>
					<th>Name</th>
					<th>Difficulty</th>
					<th>Solution</th>
					<th>Time Complexity</th>
					<th>Notes</th>
					<th>10 days</th>
					<th>30 days</th>
					<th>2 months</th>
					<th>Bookmark</th>
				</tr>
				{problems.map((problem) => {
					console.log(problem);
					return (
						<tr>
							<td className={classes.nameCard}>
								{problem[0]['name']}
							</td>
							<td className={classes.difficultyCard}>
								{problem[0]['difficulty']}
							</td>
							<td className={classes.refCard}>
								<a href={problem[0]['reference']}>Refer This</a>
							</td>
							<td className={classes.refCard}>
								{problem[0]['timeComplexity']}
							</td>
							<td className={classes.refCard}>
								{problem[0]['notes']}
							</td>
							<td className={classes.refCard}>
								<input
									type='checkbox'
									checked={checked}
									onChange={handleChange}
								/>
							</td>
							<td className={classes.refCard}>
								<input
									type='checkbox'
									checked={checked}
									onChange={handleChange}
								/>
							</td>
							<td className={classes.refCard}>
								<input
									type='checkbox'
									checked={checked}
									onChange={handleChange}
								/>
							</td>
							<td className={classes.refCard}>
								<input
									type='checkbox'
									checked={checked}
									onChange={handleChange}
								/>
							</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default ProblemList;
