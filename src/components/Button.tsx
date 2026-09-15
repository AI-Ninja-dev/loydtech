type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  isLoading = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
  };

  // Additional classes for loading state
  const loadingClasses = isLoading
    ? 'opacity-50 cursor-not-allowed'
    : '';

  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${loadingClasses}`}
      href={href}
      onClick={onClick}
      disabled={isLoading} // This will also apply the disabled styles from baseClasses
    >
      {children}
    </Component>
  );
}