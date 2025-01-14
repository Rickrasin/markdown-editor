"use client";
import Image from "next/image";

interface ButtonIconProps {
  placeHolder: string;
  onClick: () => void;
  hasIcon: boolean;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  placeHolder,
  onClick,
  hasIcon = true
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[7.83px] ${
        hasIcon ? "px-4" : "px-11"
      } py-[10px] bg-orange hover:bg-orange-hover text-white heading-M rounded-[4px] duration-200`}
    >
      {hasIcon && (
        <Image src={"icon-save.svg"} alt="Save icon" width={16} height={16} />
      )}
      {placeHolder}
    </button>
  );
};

export default ButtonIcon;
