import AboutInfo from "../Others/AboutInfo";
import WorkExperience from "../Others/WorkExperience";
import Projects from "../Others/Projects";

const HomeComponent = () => {
  return (
    <div className="space-y-20">
      {/* About */}
      <AboutInfo />

      {/* Work */}
      <WorkExperience />

      {/* Projects */}
      <Projects />
    </div>
  );
};

export default HomeComponent;
