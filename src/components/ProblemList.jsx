import React from 'react';

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
		<div className='list-container'>
			{problems.map((problem) => {
				return (
					<div className='details'>
						<div className='name-card'>{problem['name']}</div>
						<div className='difficulty-card'>
							{problem['difficulty']}
						</div>
						<div className='ref-card'>{problem['reference']}</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProblemList;
