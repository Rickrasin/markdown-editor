import { motion, Variants } from "framer-motion";
import ButtonIcon from "@/components/common/ButtonIcon";
import ThemeButton from "@/components/common/ThemeButton";

interface SidebarProps {
  isOpen: boolean;
}

const wrapperVariants: Variants = {
  hidden: {
    x: -250,
    transition: { duration: 0.5 },
    position: "absolute",
    zIndex: 1000
  },
  visible: { x: 0, transition: { duration: 0.5 } },
  exit: {
    x: -250,
    transition: { duration: 0.5 }
  }
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <>
      <motion.div
        key="sideBar"
        variants={wrapperVariants}
        initial={"hidden"}
        animate={isOpen ? "visible" : "hidden"}
        exit={"exit"}
        className="h-full"
      >
        <div className="h-full bg-color-900 p-6 left-12">
          <div className="flex flex-col gap-6 h-full">
            <p className="heading-S text-color-500">MY DOCUMENTS</p>
            <motion.div
              initial={{ x: 0 }}
              animate={
                isOpen
                  ? { x: 0, transition: { duration: 0.5 } }
                  : { x: 0, transition: { duration: 0.5 } }
              }
              className="flex-grow"
            >
              <ButtonIcon
                placeHolder="+ New Document"
                hasIcon={false}
                onClick={() => console.log("teste")}
              />
            </motion.div>
            <ThemeButton />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
