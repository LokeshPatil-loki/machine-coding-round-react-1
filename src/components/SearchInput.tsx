import React, { FormEvent, InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmit: () => void;
}

const SearchInput = ({ value, onChange, onSubmit }: SearchInputProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-3">
      <input
        value={value}
        onChange={onChange}
        className="p-2 text-base bg-white border-2 rounded-md w-80"
        placeholder="Search by Title (alt+k or cmd+k)"
      />
      <button className="px-6 text-white rounded-md cursor-pointer bg-soft-blue">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
