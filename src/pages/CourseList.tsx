import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Panel from '../components/Panel';
import { Product } from '../types/Product';
import ProductListItem from '../components/ProductListItem';

const data: Product[] = [
  {
    id: 1,
    title: 'Interview preparation with JavaScript 2.0',
    price: 9000,
    type: 'Course',
    imgUrl: 'images/products/product-1.png',
  },
  {
    id: 2,
    title: 'Aptitude - Averages, Mixtures & Allegation',
    price: 0,
    type: 'Mock Test',
    imgUrl: 'images/products/product-2.png',
  },
  {
    id: 3,
    title: 'Aptitude - Simple & Compound Interest',
    price: 0,
    type: 'Mock Test',
    imgUrl: 'images/products/product-3.png',
  },
  {
    id: 4,
    title: 'Aptitude Partnership',
    price: 0,
    type: 'Mock Test',
    imgUrl: 'images/products/product-4.png',
  },
  {
    id: 5,
    title: 'Aptitude - Time & Work',
    price: 0,
    type: 'Mock Test',
    imgUrl: 'images/products/product-5.png',
  },
];

function swapArrayElement<T>(arr: T[], index1: number, index2: number): T[] {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}

const CourseList = () => {
  const [products, setProducts] = useState(data);

  const dragProduct = useRef<number>(0);
  const dragOverProduct = useRef<number>(0);

  const handleSwap = () => {
    setProducts((prev) =>
      swapArrayElement<Product>(
        [...prev],
        dragOverProduct.current,
        dragProduct.current,
      ),
    );
  };

  const handleRemove = (id: number) => {
    const productsCopy = [...products].filter((product) => product.id != id);
    setProducts(productsCopy);
  };

  const handleMoveTop = (index: number) => {
    if (index == 0) {
      return;
    }
    setProducts((prev) => swapArrayElement<Product>([...prev], index, 0));
  };

  const handleMoveBottom = (index: number) => {
    if (index == products.length - 1) {
      return;
    }
    setProducts((prev) =>
      swapArrayElement<Product>([...prev], index, products.length - 1),
    );
  };

  const renderedProducts = products.map((product, index) => (
    <ProductListItem
      draggable
      onDragStart={() => (dragProduct.current = index)}
      onDragEnter={() => (dragOverProduct.current = index)}
      onDragEnd={handleSwap}
      onDragOver={(e) => e.preventDefault()}
      onRemove={handleRemove}
      onMoveTop={handleMoveTop}
      onMoveBottom={handleMoveBottom}
      key={index}
      product={product}
      index={index}
    />
  ));

  return (
    <div className="w-full min-h-full overflow-hidden bg-mint-green">
      <Header className="text-forest-green" />
      <div className="w-full h-full p-10 pt-0">
        <Panel
          title="Manage Bundle"
          subtitle="Change order of the products based on priority"
          className="max-w-5xl "
        >
          <div className="flex flex-col max-w-4xl gap-2 xl:mr-16">
            {renderedProducts}
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default CourseList;
