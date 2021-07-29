import React from "react";
import {
  FeatureContainer,
  FeatureButton,
  SidebarLink,
} from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>
        <SidebarLink to="/pizza">Order Now</SidebarLink>
      </FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
