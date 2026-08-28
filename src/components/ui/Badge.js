import React from "react";

const Badge = ({
  children,
  variant = "default",
  className = "",
  as: Component = "span",
  ...props
}) => {
  const baseClass =
    "transition-all duration-300 inline-block text-[0.9rem] rounded-full text-center";

  const variants = {
    default:
      "bg-section text-text hover:bg-card-hover hover:-translate-y-[1.8px] px-sm py-[4.5px] xs:text-[0.85rem] xs:px-2 xs:py-1 md:text-[0.85rem] md:px-2 md:py-1",
    primary:
      "bg-primary text-white hover:bg-primary-hover hover:-translate-y-0.5 cursor-default px-[16px] py-[8px] xs:text-[0.85rem] xs:px-[14px] xs:py-[7px] md:text-[0.85rem] md:px-[14px] md:py-[7px] font-medium",
  };

  const combinedClass = `${baseClass} ${variants[variant] || variants.default} ${className}`;

  return (
    <Component className={combinedClass} {...props}>
      {children}
    </Component>
  );
};

export default React.memo(Badge);
