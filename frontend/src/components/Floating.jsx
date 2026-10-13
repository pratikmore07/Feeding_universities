import wapp from "../assets/icons/wapp.png";
import call from "../assets/icons/call.png";

const Floating = () => {
  return (
    <div className="fixed bottom-10 right-5 z-50 flex flex-col gap-4">
      
      {/* WhatsApp */}
      <a
        href="https://wa.me/919140309999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group block"
      >
        <img
          src={wapp}
          alt="WhatsApp"
          className="
            h-10 w-10 object-contain
            transition-all duration-300 ease-out
            group-hover:scale-110
            group-hover:-translate-y-1
            group-hover:rotate-3
            group-active:scale-95
          "
        />
      </a>

      {/* Call */}
      <a
        href="tel:+919140309999"
        aria-label="Call"
        className="group block"
      >
        <img
          src={call}
          alt="Call"
          className="
            h-10 w-10 object-contain
            transition-all duration-300 ease-out
            group-hover:scale-110
            group-hover:-translate-y-1
            group-hover:-rotate-3
            group-active:scale-95
          "
        />
      </a>

    </div>
  );
};

export default Floating;
