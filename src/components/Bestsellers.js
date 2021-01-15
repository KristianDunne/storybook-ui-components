import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  border-radius: 24px;
  overflow: hidden;
  word-break: break-word;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  padding: 32px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 132%;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: ${(props) => props.color || '#12121f'};
  margin: 0;
  margin-bottom: 24px;
`;

const ProductContainer = styled.div`
  display: flex;
  border-radius: 24px;
  padding: 13px 18px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.hoverBackground || '#fef2ee'};
  }
`;

const ProductImage = styled.img`
  margin-right: 24px;
`;

const ProductInfo = styled.div``;

const ProductName = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: ${(props) => props.color || '#fe805c'};
`;

const ProdcutBrand = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: ${(props) => props.color || '#afafbd'};
`;

const PriceTag = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: ${(props) => props.color || '#12121f'};
`;

export const Bestsellers = (props) => {
  return (
    <MainContainer backgroundColor={props.containerBackgroundColor}>
      <Title color={props.titleColor}>Bestsellers</Title>

      {props.products.map((product, index) => (
        <ProductContainer
          hoverBackground={props.productHoverBackground}
          key={index}
          onClick={() => props.onProductClick(product)}
        >
          <ProductImage src={product.image}></ProductImage>
          <ProductInfo>
            <ProductName color={props.productNameColor}>{product.name}</ProductName>
            <ProdcutBrand color={props.productBrandColor}>{product.brand}</ProdcutBrand>
            <PriceTag color={props.productPriceColor}>{product.price}</PriceTag>
          </ProductInfo>
        </ProductContainer>
      ))}
    </MainContainer>
  );
};
