import styled from "styled-components";
import { mobile } from "../responsive";
import React from 'react';
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://d.newsweek.com/en/full/1670967/plants-interior-design-indoor-garden.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  margin: right,
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 10px 0px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 10px 0px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 10px 0px 0px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  `;
const Option = styled.option``;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  flex-wrap: wrap;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Checkoutform = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CONFIRMATION YOUR ORDER</Title>
        <Form>
          <Input placeholder="fullname" />
          <Input placeholder="email" />
          <Input placeholder="address" />
          <Input placeholder="phone number"/>
        </Form>

        <Title> PAYMENT </Title>
            <Select>
                <Option disabled selected>
                Pay by
                </Option>
                <Option>Cash</Option>
                <Option>MOMO</Option>
                <Option>PAYPAL</Option>
          </Select>
        <Agreement>

        <Title> YOUR BILL </Title>
        <Summary>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>2000000 VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>2000000 VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>5% Discount (No More than 50.000)</SummaryItemText>
              <SummaryItemPrice> -20000VND </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> 3000000 VND </SummaryItemPrice>
            </SummaryItem>
          </Summary>
        By pressing ORDER means you agree with our policy <b>PRIVACY POLICY</b>
       </Agreement>
       <Button>ORDER</Button>
      </Wrapper>
    </Container>
  );
};

export default Checkoutform;
