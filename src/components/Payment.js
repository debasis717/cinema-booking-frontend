import React from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  margin: 20px;
`;

const Payment = () => (
  <PaymentContainer>
    <h2>Payment</h2>
    <form>
      <label>
        Card Number:
        <input type="text" placeholder="1234 5678 9012 3456" />
      </label>
      <label>
        Expiry Date:
        <input type="text" placeholder="MM/YY" />
      </label>
      <label>
        CVV:
        <input type="text" placeholder="123" />
      </label>
      <button type="submit">Pay</button>
    </form>
  </PaymentContainer>
);

export default Payment;
