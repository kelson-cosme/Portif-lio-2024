import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Section = ({ section, setActiveSection, timeOfLastClick }) => {
  const { id, heading, sobre } = section;
  const { inView, ref, entry } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 100) {
      setActiveSection(entry?.target.id);
    }
  }, [inView, entry, setActiveSection, timeOfLastClick]);

  return (
    <section
      id={id}
      ref={ref}
      className="
        flex flex-col
        text-center
      "
    >
      <h1 className="m-20 text-5xl font-bold mb-6">{heading}</h1>
      <p className="text-lg font-medium ">{sobre}</p>
    </section>
  );
};

export default Section;
