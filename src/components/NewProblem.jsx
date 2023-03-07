import React, { useState } from 'react';
import classes from '../styles/main.module.css';
export default function NewProblem(props) {
	const [state, setState] = useState({
		name: '',
		link: '',
		reference: '',
		difficulty: '',
		timeComplexity: '',
		notes: '',
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		alert('A name was submitted: ' + state.difficulty);
		console.log(state);
		props.stateVar(false);
		props.setAddProblem(state);
		props.problemList.push(state);
		let problemListLocal =
			JSON.parse(window.localStorage.getItem('problemListLocal')) ||
			[];
		problemListLocal.push(props.problemList);
		window.localStorage.setItem(
			'problemListLocal',
			JSON.stringify(problemListLocal)
		);
		// newObject.problems = props.problemList;
		event.preventDefault();
	};

	return (
		<div className={classes.addBox}>
			<form onSubmit={handleSubmit}>
				<input
					name='name'
					type='text'
					value={state.name}
					onChange={handleChange}
					placeholder='Name'
				/>

				<input
					type='text'
					name='difficulty'
					value={state.difficulty}
					onChange={handleChange}
					placeholder='Difficulty'
				/>

				<input
					name='reference'
					type='text'
					value={state.reference}
					onChange={handleChange}
					placeholder='Solution Link'
				/>
				<input
					name='timeComplexity'
					type='text'
					value={state.timeComplexity}
					onChange={handleChange}
					placeholder='Time Complexity'
				/>

				<input
					name='notes'
					type='text'
					value={state.notes}
					onChange={handleChange}
					placeholder='Notes'
				/>

				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}
