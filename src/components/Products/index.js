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
} from "./ProductElement";
import { useStateValue } from "../../StateProvider";

function Product({ heading, data }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <ProductsContainer id="product">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>₹{product.price}</ProductPrice>
                <ProductButton
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_BASKET",
                      item: {
                        id: product.index,
                        title: product.name,
                        image: product.img,
                        price: product.price,
                        desc: product.desc,
                      },
                    });
                  }}
                >
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Product;
