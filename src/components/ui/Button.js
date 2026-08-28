import React from "react";

const Button = ({ href, children, icon: Icon, className = "", target, rel, onClick, ...props }) => {
  const baseClass =
    "text-white no-underline bg-primary rounded-[5px] font-semibold shadow-[0_3.6px_7.2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-primary-hover hover:-translate-y-[2.7px] hover:shadow-[0_7.2px_14.4px_rgba(0,0,0,0.3)] focus:outline-2 focus:outline-offset-2 focus:outline-primary cursor-pointer inline-flex items-center justify-center gap-[7px]";

  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} {...props}>
        {Icon && <Icon className="text-sm xs:text-base" />}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...props}>
      {Icon && <Icon className="text-sm xs:text-base" />}
      {children}
    </button>
  );
};

export default React.memo(Button);
