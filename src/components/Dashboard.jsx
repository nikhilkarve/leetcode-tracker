import React from 'react';
import ProblemList from './ProblemList';
import classes from '../styles/main.module.css';

import AddProblemButton from './AddProblemButton';

const Dashboard = () => {
	return (
		<div className={classes.main}>
			<h1 className={classes.heading}>Progress tracker</h1>
			<AddProblemButton />
			<p className={classes.para}>
				Here you can add the problems you solved. If you used any
				reference you can also add that (video/article link).{' '}
			</p>
			<ProblemList />
		</div>
	);
};

export default Dashboard;
