// Components
import TalksShowcase from "../Others/TalksShowcase";

// Icons
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const Talks = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="lg:space-y-20 md:space-y-36  space-y-20  relative">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border absolute top-5 left-0
         bg-white flex items-center justify-center cursor-pointer"
        onClick={goBack}
      >
        <ArrowLeft size={20} className="font-medium" />
      </button>

      <div className="pt-20">
        <TalksShowcase />
      </div>
    </div>
  );
};

export default Talks;
