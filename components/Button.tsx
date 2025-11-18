import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    primary: "border-transparent text-slate-900 bg-brand-yellow hover:bg-yellow-300 focus:ring-brand-yellow font-bold shadow-lg shadow-brand-yellow/20",
    secondary: "border-transparent text-white bg-brand-blue hover:bg-blue-800 focus:ring-brand-blue shadow-lg shadow-brand-blue/20",
    outline: "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-lightBlue focus:ring-brand-blue"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;