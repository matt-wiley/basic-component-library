import React from 'react';
import './Button.css';

interface IButtonProps {
  label: string;
}

const Button = (props: IButtonProps) => {

  const { label } = props;

  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default Button;