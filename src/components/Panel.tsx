import classNames from 'classnames';
import React, { ReactNode } from 'react';
interface PanelProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

const Panel = ({ children, title, subtitle, className }: PanelProps) => {
  return (
    <div
      className={classNames(
        'xl:w- font-dm-sans p-6 m-auto bg-white rounded-xl shadow-md',
        className,
      )}
    >
      <div className="mb-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="text-subtitle">{subtitle}</div>
      </div>
      {children}
    </div>
  );
};

export default Panel;
