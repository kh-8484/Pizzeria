import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./components/Dessert/ProductElement";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <ProductsContainer>
      <ProductsHeading>Your Order</ProductsHeading>
      <ProductWrapper>
        {basket.map((item) => {
          return (
            <ProductCard key={item.id}>
              <ProductImg src={item.image} alt="img" />
              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductDesc>{item.desc}</ProductDesc>
                <ProductPrice>₹{item.price}</ProductPrice>
                <ProductButton
                  onClick={() => {
                    // remove the item from the basket
                    dispatch({
                      type: "REMOVE_FROM_BASKET",
                      id: item.id,
                    });
                  }}
                >
                  Remove Item
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      <Subtotal />
    </ProductsContainer>
  );
}

export default Checkout;
