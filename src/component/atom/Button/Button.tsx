export type Button = {
  variant: 'primary' | 'secondary';
};

export const Button: React.FC<Button> = ({ children, variant }) => (
  <button className={`button button-${variant}`}>{children}</button>
);
