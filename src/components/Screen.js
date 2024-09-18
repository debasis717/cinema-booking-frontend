import React from 'react';
import styled from 'styled-components';

const ScreenContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  text-align: center;
  line-height: 50px;
  margin: 20px 0;
  font-weight: bold;
`;

const Screen = () => (
  <ScreenContainer>
    SCREEN
  </ScreenContainer>
);

export default Screen;
