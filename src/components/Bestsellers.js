import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  border-radius: 24px;
  overflow: hidden;
  word-break: break-word;
  background-color: #ffffff;
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
  color: #12121f;
  margin: 0;
  margin-bottom: 24px;
`;

const ProductContainer = styled.div`
  display: flex;
  border-radius: 24px;
  padding: 13px 18px;
  cursor: pointer;
  &:hover {
    background: #fef2ee;
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
  color: #fe805c;
`;

const ProdcutBrand = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: #afafbd;
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
  color: #12121f;
`;

const products = [
  {
    image: '/product1.svg',
    name: 'Nike Air Max 270',
    brand: 'Nike',
    price: '$195.80',
  },
  { image: '/product2.svg', name: 'Nike Air Max 90', brand: 'Nike', price: '$195.80' },
  { image: '/product3.svg', name: 'Nike Air Max Plus', brand: 'Nike', price: '$195.80' },
];

export const Bestsellers = (props) => {
  return (
    <MainContainer>
      <Title>Bestsellers</Title>

      {products.map((product) => (
        <ProductContainer>
          <ProductImage src={product.image}></ProductImage>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProdcutBrand>{product.brand}</ProdcutBrand>
            <PriceTag>{product.price}</PriceTag>
          </ProductInfo>
        </ProductContainer>
      ))}
    </MainContainer>
  );
};
