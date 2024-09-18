import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  margin: 20px;
`;

const Summary = ({ selectedSeats }) => {
  const calculateTotal = () => {
    const prices = { diamond: 20, gold: 15, silver: 10 };
    return Object.values(selectedSeats).reduce((total, seat) => (
      seat.isSelected ? total + prices[seat.category] : total
    ), 0);
  };

  return (
    <SummaryContainer>
      <h2>Summary</h2>
      <p>Total Cost: ${calculateTotal()}</p>
    </SummaryContainer>
  );
};

export default Summary;
