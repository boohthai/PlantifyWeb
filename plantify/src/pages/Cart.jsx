import { Add, Remove, Delete } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, updateItemQuantity } from "../actions/cart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  text-decoration: none;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 15px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
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

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
`;

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.list);
  const cost = useSelector((state) => state.cart.cost);
  const totalItems = useSelector((state) => state.cart.total);
  const [totalCost, setTotalCost] = useState(cost);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    console.log("REMOVING ", item);
    dispatch(removeItemFromCart(item));
  };

  const calcTotal = (total) => {
    var result = total;
    if (total > 0) {
      result += 30000;
    }
    if (total >= 500000) {
      result -= 30000;
    }
    const promotion = total * 0.05 >= 50000 ? 50000 : total * 0.05;
    return result - promotion;
  };

  useEffect(() => {
    setTotalCost(cost);
  }, [cost]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/products">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag ({totalItems})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <Link to="/checkout">
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cartItems.map((item) => (
              <Product>
                <ProductDetail>
                  <Image src={item.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.id}
                    </ProductId>

                    <ProductSize>
                      <b>Size:</b> {item.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch(updateItemQuantity(item, -1));
                          setTotalCost(cost);
                        }
                      }}
                    />
                    <ProductAmount>{item.quantity}</ProductAmount>
                    <Add
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(updateItemQuantity(item, 1));
                        setTotalCost(cost);
                      }}
                    />
                    <Delete style={{ paddingLeft: "35px", cursor: "pointer" }} onClick={() => handleRemoveItem(item)} />
                  </ProductAmountContainer>
                  <ProductPrice> {item.price} VND</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{totalCost} VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>{totalCost > 0 ? 30000 : 0} VND</SummaryItemPrice>
            </SummaryItem>
            {totalCost >= 500000 && (
              <SummaryItem style={{ color: "red" }}>
                <SummaryItemText>Freeship for Order Over 500.000VND</SummaryItemText>
                <SummaryItemPrice>-30000 VND</SummaryItemPrice>
              </SummaryItem>
            )}
            <SummaryItem>
              <SummaryItemText>5% Discount (No More than 50.000)</SummaryItemText>
              <SummaryItemPrice> -{totalCost * 0.05 >= 50000 ? 50000 : totalCost * 0.05} VND </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice> {calcTotal(totalCost)} VND </SummaryItemPrice>
            </SummaryItem>
            <Link to="/checkout">
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
