import { useState } from "react";
import { AppTabButton } from "./AppTabButton";
import { AppTabContent } from "./AppTabContent";
import "./AppTab.css";

export function AppTab({ petData }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-tab">
      {petData.map((item, index) => (
        <div>
          <AppTabButton
            onClick={() => setActiveTab(index)}
            isActive={index === activeTab}
          >
            {item.animal}
          </AppTabButton>
        </div>
      ))}
      <AppTabContent data={petData[activeTab]} />
    </div>
  );
}
