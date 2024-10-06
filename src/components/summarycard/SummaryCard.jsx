import React from 'react';
// import styles from '../styles/SummaryCard.module.css';

const SummaryCard = ({ subscriptions }) => {
  const activeCount = subscriptions.filter(sub => sub.status === 'Active').length;

  return (
    <div className='card'>
      <h2>Total Active Subscriptions</h2>
      <p>{activeCount}</p>
    </div>
  );
};

export default SummaryCard;
