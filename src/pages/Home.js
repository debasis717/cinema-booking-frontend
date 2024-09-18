import React, { useState } from 'react';
import SeatSelection from '../components/SeatSelection';
import Summary from '../components/Summary';
import Payment from '../components/Payment';

const Home = () => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleSeatSelection = (seat) => {
    setSelectedSeats(prev => ({
      ...prev,
      [seat]: {
        ...prev[seat],
        isSelected: !prev[seat]?.isSelected,
      },
    }));
  };

  return (
    <div>
      <SeatSelection onSeatClick={handleSeatSelection} />
      <Summary selectedSeats={selectedSeats} />
      <Payment />
    </div>
  );
};

export default Home;
