import React from 'react';
import './genButton.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--try', 'btn--time'];

const SIZES = ['btn--medium', 'btn--large'];

export const GenButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={(e)=>{e.preventDefault();onClick();}}
        type={type}
      >
        {children}
      </button>
    </>
  );
};