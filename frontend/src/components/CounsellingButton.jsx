import { Link } from "react-router-dom";

const CounsellingButton = ({ label = "Get Free Counselling" }) => {
  return (
    <Link
      to="/counselling"
      className="
        group
        inline-flex
        h-12
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#2C5CF6]
        px-6
        text-sm
        font-bold
        text-white
        shadow-[0_6px_14px_rgba(44,92,246,0.28)]
        transition-all
        duration-300
        ease-out
        hover:bg-[#2857ED]
        hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.22)]
        active:scale-[0.98]
      "
    >
      <span>{label}</span>

      <span
        className="
          text-xl
          leading-none
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </Link>
  );
};

export default CounsellingButton;