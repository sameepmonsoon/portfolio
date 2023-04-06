import React from "react";

const ProjectsComponent = (props: { projectContent: React.ReactElement }) => {
  const { projectContent } = props;
  return (
    <div className="md:w-full md:min-h-[100vh] gap-10 sm:gap-x-20 py-10 md:px-5 flex-col flex flex-wrap md:flex  md:flex-row  justify-center items-center overflow-hidden">
      {projectContent}
    </div>
  );
};

export default ProjectsComponent;
