import { ReactNode } from 'react';

type Props = {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: () => void;
};

const Button = ({ children, variant, className, outline, onClick }: Props) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`h-[50px] rounded border-2 px-10 ${
        variant === 'primary' ? 'border-primary' : 'border-secondary'
      } ${
        !outline
          ? variant === 'primary'
            ? 'bg-primary text-white hover:bg-white hover:text-primary'
            : variant === 'secondary'
            ? 'bg-secondary text-white hover:bg-white hover:text-secondary'
            : ''
          : variant === 'primary'
          ? 'text-primary hover:bg-primary hover:text-white bg-white'
          : variant === 'secondary'
          ? 'text-secondary hover:bg-secondary hover:text-white bg-white'
          : ''
      } mb-4 duration-300 transition-all hover:shadow-md font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
