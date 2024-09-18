import React from 'react';
import styled from 'styled-components';

const SeatButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 5px;
  background-color: ${props => props.isSelected ? 'green' : props.category};
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Seat = ({ isSelected, category, onClick }) => (
  <SeatButton
    isSelected={isSelected}
    category={category}
    onClick={onClick}
  />
);

export default Seat;
