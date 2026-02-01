import React from "react";
import { type LucideIcon, ChevronRight } from "lucide-react";

interface LinkButtonProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "primary";
}

const LinkButton: React.FC<LinkButtonProps> = ({
  icon: Icon,
  label,
  href,
  onClick,
  variant = "default",
}) => {
  const baseClasses =
    "group flex items-center justify-between w-full p-4 mb-3 rounded-full transition-all duration-300 border backdrop-blur-sm cursor-pointer";

  const variantClasses = {
    default:
      "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] text-white",
    primary:
      "bg-blue-900/30 border-blue-500/30 hover:bg-blue-900/50 hover:border-blue-500/50 hover:scale-[1.02] text-blue-100",
  };

  const content = (
    <>
      <div className="flex items-center gap-3">
        <Icon
          className={`w-5 h-5 ${variant === "primary" ? "text-blue-400" : "text-gray-400 group-hover:text-white"} transition-colors`}
        />
        <span className="font-medium text-sm sm:text-base">{label}</span>
      </div>
      <ChevronRight
        className={`w-4 h-4 ${variant === "primary" ? "text-blue-400" : "text-gray-500 group-hover:text-white"} transition-colors`}
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {content}
    </button>
  );
};

export default LinkButton;
