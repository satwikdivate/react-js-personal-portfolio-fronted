import React from "react";

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className="flex items-center gap-2">
          <span>
            {/* <HiOutlineVideoCamera /> */}
          </span>
          <p>{subSec?.title}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseSubSectionAccordion;
