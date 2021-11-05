import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal! 5% Discount (Maximum of 50.000VND) for all orders and Free Shipping on Orders Over 500.000VND
    </Container>
  );
};

export default Announcement;
