import React, { FormEvent, forwardRef, InputHTMLAttributes } from 'react';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmit: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, onSubmit }, ref) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit();
    };
    return (
      <form onSubmit={handleSubmit} className="flex flex-row gap-3">
        <input
          ref={ref}
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
  },
);

export default SearchInput;
