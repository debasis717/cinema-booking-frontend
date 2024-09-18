import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MovieCard = ({ title, description }) => (
  <Card>
    <h2>{title}</h2>
    <p>{description}</p>
  </Card>
);

export default MovieCard;
