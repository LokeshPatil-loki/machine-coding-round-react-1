import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';

interface DropDownProps {
  value: string | number;
  config: {
    label: string | number;
    value: string | number;
  }[];
  onChange: (page: number) => void;
}

const DropDown = ({ value, config, onChange }: DropDownProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleChnage = (page: number) => {
    setShowDropdown(false);
    onChange(page);
  };

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className="flex items-center gap-2 px-2 py-1 border rounded-md shadow"
      >
        <span className="text-xs">{value}</span>{' '}
        <FaAngleDown className="font-mono text-xs" />
      </div>
      {showDropdown && (
        <div
          role="menu"
          className="absolute flex flex-col items-center justify-center w-full h-20 pt-20 mt-1 overflow-auto bg-white border rounded shadow "
        >
          {config.map((item) => (
            <div
              onClick={() => handleChnage(item.value as number)}
              className="w-full text-xs text-center cursor-pointer hover:bg-gray-100"
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
