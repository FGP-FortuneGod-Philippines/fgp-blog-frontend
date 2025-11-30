const BaseCards = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative rounded-md p-6 shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default BaseCards;
