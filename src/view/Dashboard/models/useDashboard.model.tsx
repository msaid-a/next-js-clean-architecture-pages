//view models
import React, { useState } from "react";

const useDashboardModel = () => {
  const [example, setExample] = useState();
  
  return { example, setExample };
};

export default useDashboardModel;
