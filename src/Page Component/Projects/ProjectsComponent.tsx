import React from "react";

const ProjectsComponent = (props: { projectContent: React.ReactElement }) => {
  const { projectContent } = props;
  return (
    <div className="md:w-full md:min-h-[100vh] gap-10 py-10 flex-col flex flex-wrap md:flex md:flex-wrap md:flex-row md:justify-evenly justify-center md:items-center items-center overflow-hidden">
      {projectContent}
    </div>
  );
};

export default ProjectsComponent;
