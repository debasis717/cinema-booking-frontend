import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Cinema Booking</h1>
  </HeaderContainer>
);

export default Header;
