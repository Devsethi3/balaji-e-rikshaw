import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const HeaderTop = () => {
  return (
    <>
      <div className="h-[6vh] bg-rose-500 text-white flex items-center justify-end">
        <div className="flex items-center justify-end text-xs lg:text-sm gap-8 container">
          <p className="flex items-center gap-2">
            <FaPhone size={13} />
            +91 9560307153, +91 8851500167
          </p>
          <p className="flex items-center gap-1">
            <MdMail size={18} />
            akumar8oct.ak@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
