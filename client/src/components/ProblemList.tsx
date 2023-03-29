import classes from '../styles/main.module.css';
import { useContext, useEffect, useState } from 'react';
import myData from '../mocks/problem-data.json'
import { ProblemContext } from '../context/ProblemContext';

export interface ProblemProps {
	name: string;
	link: string;
	reference: string;
	difficulty: string;
	timeComplexity?: string;
	notes?: string;
	type?: string;
}

const ProblemList = () => {
	const {problemList, getProblemsFromLocalStorage} = useContext(ProblemContext)
	useEffect(()=> {
		getProblemsFromLocalStorage()
	}, [])
	const [checked, setChecked] = useState(false);
	let problems:ProblemProps[] = problemList;
	const handleChange = () => {
		setChecked(!checked);
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
					<th>Type</th>
					<th>10 days</th>
					<th>30 days</th>
					<th>2 months</th>
					<th>Bookmark</th>
				</tr>
				
				{problems.map((problem) => {
					return (
						<tr>
							<td className={classes.nameCard}>
								{problem.name}
							</td>
							<td className={classes.difficultyCard}>
								{problem.difficulty}
							</td>
							<td className={classes.refCard}>
								<a href={problem.reference}>Refer This</a>
							</td>
							<td className={classes.refCard}>
								{problem.timeComplexity}
							</td>
							<td className={classes.refCard}>
								{problem.notes}
							</td>
							<td className={classes.refCard}>
								{problem.type}
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
