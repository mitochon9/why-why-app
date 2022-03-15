export type Button = {
  buttonType: 'submit' | 'button';
  buttonVariant: 'primary' | 'secondary';
  onClick?: (e: any) => void;
  className?: string;
};

export const Button: React.FC<Button> = ({
  children,
  buttonType,
  buttonVariant,
  onClick,
  className,
}) => {
  return (
    <button
      type={buttonType}
      className={`button button-${buttonVariant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
