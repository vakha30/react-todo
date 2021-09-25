import React from "react";
import ContentLoader from "react-content-loader";

const TaskLoader = (props) => (
  <ContentLoader
    speed={2}
    width={513}
    height={30}
    viewBox="0 0 513 30"
    backgroundColor="#f0f0f0"
    foregroundColor="#d9d9d9"
    {...props}
  >
    <rect x="0" y="325" rx="6" ry="6" width="280" height="84" />
    <rect x="0" y="289" rx="6" ry="6" width="280" height="24" />
    <rect x="0" y="430" rx="5" ry="5" width="89" height="27" />
    <rect x="128" y="422" rx="28" ry="28" width="151" height="4" />
    <rect x="8" y="8" rx="3" ry="3" width="15" height="15" />
    <rect x="40" y="7" rx="2" ry="2" width="290" height="16" />
    <rect x="463" y="6" rx="3" ry="3" width="17" height="17" />
    <rect x="489" y="6" rx="11" ry="11" width="17" height="17" />
  </ContentLoader>
);

export default TaskLoader;
