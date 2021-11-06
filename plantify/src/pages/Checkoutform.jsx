import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CallReceived } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://d.newsweek.com/en/full/1670967/plants-interior-design-indoor-garden.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  height: 90%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  margin: 20px,
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
  border: 1px solid #e9e9e9;
  border-radius: 10px;

  &:focus {
    border: none;
    box-shadow: 0px 0px 2px gray;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 10px 0px 0px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 10px 0px 0px;
  font-size: 22px;
`;

const Select = styled.select`
  width: 200px;
  border-radius: 10px;
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

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-size: 18px;
`;

const SummaryItemPrice = styled.span`
  font-size: 18px;
`;

const Checkoutform = () => {
  const cartItems = useSelector((state) => state.cart.list);
  const cost = useSelector((state) => state.cart.cost);

  const calc = (cost) => {
    let res = cost;
    if (cost < 500000) res += 30000;
    const promotion = cost * 0.05 >= 50000 ? 50000 : cost * 0.05;
    return res - promotion;
  };

  return (
    <Container>
      <Wrapper>
        <Title>CONFIRMATION YOUR ORDER</Title>
        <Form>
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Address" />
          <Input placeholder="Phone Number" />
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
            {cartItems.map((item) => (
              <SummaryItem>
                <SummaryItemText style={{ fontSize: "14px" }}>{item.title}</SummaryItemText>
                <SummaryItemPrice style={{ fontSize: "14px" }}>
                  {item.price} VND <span style={{ paddingLeft: "10px", fontWeight: "700" }}> x {item.quantity}</span>
                </SummaryItemPrice>
              </SummaryItem>
            ))}
            <hr></hr>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cost} VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>{cost > 500000 ? 0 : 30000} VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>5% Discount (No More than 50.000 VND)</SummaryItemText>
              <SummaryItemPrice> - {cost * 0.05 >= 50000 ? 50000 : cost * 0.05} VND </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice style={{ fontSize: "22px", fontWeight: "800", color: "red" }}>
                {" "}
                {calc(cost)} VND{" "}
              </SummaryItemPrice>
            </SummaryItem>
          </Summary>
          By pressing ORDER means you agree with our <b>PRIVACY POLICY</b>
        </Agreement>
        <Buttons>
          <Button>ORDER</Button>
          <Button>
            <Link style={{ textDecoration: "none", color: "white", fontSize: "22px" }} to="/">
              Go to HOME
            </Link>
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Checkoutform;
