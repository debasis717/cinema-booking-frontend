import React, { useState } from 'react';
import styled from 'styled-components';
import Seat from './Seat';
import Screen from './Screen';

const SeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  margin: 5px 0;
`;

const seatCategories = {
  diamond: 'gold',
  gold: 'silver',
  silver: 'grey',
};

const SeatSelection = ({ onSeatClick }) => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleSeatClick = (row, seat, category) => {
    const key = `${row}-${seat}`;
    setSelectedSeats(prev => ({
      ...prev,
      [key]: {
        category,
        isSelected: !prev[key]?.isSelected,
      },
    }));
    onSeatClick(`${row}-${seat}`);
  };

  const renderSeats = (row, category) => {
    return (
      <Row key={row}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Seat
            key={i}
            isSelected={selectedSeats[`${row}-${i}`]?.isSelected}
            category={seatCategories[category]}
            onClick={() => handleSeatClick(row, i, category)}
          />
        ))}
      </Row>
    );
  };

  return (
    <SeatContainer>
      <Screen />
      <div>
        <h2>Diamond Seats</h2>
        {renderSeats('A', 'diamond')}
      </div>
      <div>
        <h2>Gold Seats</h2>
        {renderSeats('B', 'gold')}
      </div>
      <div>
        <h2>Silver Seats</h2>
        {renderSeats('C', 'silver')}
      </div>
    </SeatContainer>
  );
};

export default SeatSelection;
