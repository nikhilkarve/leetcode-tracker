import React from 'react';
import classes from '../styles/main.module.css';

const ProblemList = () => {
	const problems = [
		{
			name: 'Two Sum',
			link: 'https://leetcode.com/problems/two-sum/',
			reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			difficulty: 'Easy',
		},
		{
			name: 'Two Sum',
			link: 'https://leetcode.com/problems/two-sum/',
			reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			difficulty: 'Easy',
		},
		{
			name: 'Two Sum',
			link: 'https://leetcode.com/problems/two-sum/',
			reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			difficulty: 'Easy',
		},
		{
			name: 'Two Sum',
			link: 'https://leetcode.com/problems/two-sum/',
			reference: 'https://www.youtube.com/watch?v=pblq-fj137A',
			difficulty: 'Easy',
		},
	];

	return (
		<div className='listContainer'>
			{problems.map((problem) => {
				return (
					<div className={classes.problemPane}>
						<div className={classes.nameCard}>{problem['name']}</div>
						<div className={classes.difficultyCard}>
							{problem['difficulty']}
						</div>
						<div className={classes.refCard}>
							<a href={problem['reference']}>Refer This</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProblemList;
