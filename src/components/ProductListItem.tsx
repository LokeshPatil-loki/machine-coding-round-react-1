import { HTMLProps, useState } from 'react';
import { Product } from '../types/Product';
import { FaArrowUp, FaArrowDown, FaTrashAlt } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

interface ProductListItemProps extends HTMLProps<HTMLDivElement> {
  product: Product;
  index: number;
  onRemove: (id: number) => void;
  onMoveTop: (index: number) => void;
  onMoveBottom: (index: number) => void;
}

const ProductListItem = ({
  product,
  index,
  onRemove,
  onMoveTop,
  onMoveBottom,
  ...rest
}: ProductListItemProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleRemove = (id: number) => {
    setShowMenu(false);
    onRemove(id);
  };

  const handleMoveTop = (index: number) => {
    setShowMenu(false);
    onMoveTop(index);
  };

  const handleMoveBottom = (index: number) => {
    setShowMenu(false);
    onMoveBottom(index);
  };

  return (
    <div
      className="relative flex justify-between px-3 py-2 border shadow-md rounded-xl"
      {...rest}
    >
      <div className="flex items-center justify-center gap-3">
        <img src="images/dragIcon.svg" />
        <img src={product.imgUrl} />
        <div className="font-semibold">{product.title}</div>
      </div>
      <div className="flex flex-row items-center justify-between gap-3 font-normal min-w-56">
        <div className="min-w-24">
          {product.price ? `Rs. ${product.price}/-` : 'Free'}
        </div>
        <div className="px-2 py-1 text-sm rounded-md bg-pale-mint-green">
          {product.type}
        </div>
        <button onClick={(e) => setShowMenu((prev) => !prev)}>
          {/* <img src="images/3-dots.svg"></img> */}
          <HiDotsVertical className="text-xl" />
        </button>
        {showMenu && (
          <div className="absolute right-0 z-10 flex flex-col items-start justify-center gap-2 p-4 bg-white border shadow-md top-12 rounded-xl w-44">
            <button
              onClick={() => handleMoveTop(index)}
              className="flex items-center justify-center gap-2"
            >
              <FaArrowUp /> Move To Top
            </button>
            <button
              onClick={() => handleMoveBottom(index)}
              className="flex items-center justify-center gap-2"
            >
              <FaArrowDown /> Move To Bottom
            </button>
            <button
              onClick={() => handleRemove(product.id)}
              className="flex items-center justify-center gap-2 text-error"
            >
              <FaTrashAlt className="" /> Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListItem;
