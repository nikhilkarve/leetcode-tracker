import React from 'react';
import ProblemList from './ProblemList';

const Dashboard = () => {
  return(
    <div className="contain">
      <h1>Welcome to Leetcode problem tracker</h1>
      <p>Here you can add the problems you solved. If you used any reference you can also add that (video/article link). </p>
      <ProblemList/>
    </div>
  );
}

export default Dashboard;