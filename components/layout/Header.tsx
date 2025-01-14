"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ButtonIcon from "@/components/common/ButtonIcon";

interface HeaderProps {
  isOpen: boolean;
  toggleHeader: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleHeader, isOpen }) => {
  return (
    <div className="flex h-[72px] bg-color-800 duration-75">
      <button onClick={toggleHeader} className="bg-color-700 px-[21px]">
        <AnimatePresence initial={false}>
          {!isOpen ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180, transition: { duration: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"/icon-menu.svg"}
                width={30}
                height={18}
                alt="Hamburguer Menu Icon"
              />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180, transition: { duration: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={"/icon-close.svg"}
                width={22.63}
                height={22.63}
                alt="Hamburguer Menu Icon"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <div className="flex items-center flex-grow justify-between ml-[24.75px] mr-4">
        <div className="flex items-center">
          <Image
            src="logo.svg"
            width={129.1}
            height={11.11}
            alt="Logo Icon"
            className=""
          />
          <span className="border-l border-color-600 h-1 py-4 ml-[30.15px] mr-6" />
          <div className="flex items-center gap-[16.29px] ">
            <Image
              src={"icon-document.svg"}
              width={13.71}
              height={16}
              alt="Document Icon"
            />
            <div className="flex flex-col justify-start">
              <p className="body-S text-color-500">Document Name</p>
              <p className="body-S text-color-100">#NAME.MD#</p>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <button>
            <Image
              src={"icon-delete.svg"}
              width={18}
              height={20}
              alt="Trash Delete Icon"
            />
          </button>
          <ButtonIcon
            placeHolder="Save Changes"
            onClick={() => {}}
            hasIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
