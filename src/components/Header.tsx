import classNames from 'classnames';
import React from 'react';

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const classes = classNames(
    'font-inter font-bold text-5xl p-10 text-center',
    className,
  );
  return <div className={classes}>Chai aur Code</div>;
};

export default Header;
