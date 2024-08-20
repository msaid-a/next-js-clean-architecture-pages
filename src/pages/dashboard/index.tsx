import React from "react";
import useDashboardModel from "./useDashboard.model";
import SectionListUser from "@/view/Dashboard/organism/SectionListUser";

const Dashboard = () => {
  const { example } = useDashboardModel();
  return (
    <div>
      Dashboard + {example}
      <SectionListUser />
    </div>
  );
};

export default Dashboard;
