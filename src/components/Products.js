import React from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import productsImage from '../assets/images/product.jpeg';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: white;
`;

const ProductsContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
`;

const ProductBox = styled.div`
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const productList = [
  { id: 1, name: 'Sofa', category: 'Furniture' },
  { id: 2, name: 'Dining Table', category: 'Furniture' },
  { id: 3, name: 'Kitchen Set', category: 'Steel Equipment' },
  { id: 4, name: 'Outdoor Grill', category: 'Steel Equipment' },
  { id: 5, name: 'Ceiling Design', category: 'Plaster of Paris Works' },
  { id: 6, name: 'Wall Art', category: 'Plaster of Paris Works' },
  { id: 7, name: 'Chandelier', category: 'Decor' },
  { id: 8, name: 'Vase', category: 'Decor' },
];

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState([productList[0], productList[1]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProducts(prevProducts => {
        const newStart = (productList.indexOf(prevProducts[0]) + 2) % productList.length;
        const newEnd = (productList.indexOf(prevProducts[1]) + 2) % productList.length;
        return [productList[newStart], productList[newEnd]];
      });
    }, 3000); // Change products every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Element name="products">
      <Parallax bgImage={productsImage} strength={300}>
        <SectionWrapper>
          <ProductsContent>
            <h1>Our Products</h1>
            <Carousel>
              {productList.map(product => (
                <Carousel.Item key={product.id}>
                  <ProductBox>{product.name}</ProductBox>
                </Carousel.Item>
              ))}
            </Carousel>
          </ProductsContent>
        </SectionWrapper>
      </Parallax>
    </Element>
  );
};

export default Products;
