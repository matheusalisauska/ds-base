'use client'
import React from 'react';

export interface CtaButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disable: boolean;
  textSize?: string;
  width?: string;
}

export const CtaButton = ({
  label = "",
  textSize = "text-base",
  width = "w-full",
  onClick = () => { },
  disable = false,
}: CtaButtonProps) => {

  return (
    <button
      onClick={disable ? () => { } : onClick}
      className={`btn flex items-center gap-4 bg-sky-300 ${width} py-3 font-semibold ${textSize} text-white transition duration-300 
         rounded-button-plin pl-10 pr-10 cursor-pointer whitespace-nowrap hover:bg-amarelo hover:text-azul
         hover:[&>*]fill-blue-500`}
      disabled={disable}
    >
      {label}
    </button>
  );
};

