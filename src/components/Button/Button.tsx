import React from 'react';

export interface IButtonProps {
  label: string;
}

const Button = (props: IButtonProps) => {

  const { label } = props;

  return (
    <div>
      <button className='rounded bg-blue-400 text-white text-md py-1 px-3'>{label}</button>
    </div>
  );
};

export default Button;