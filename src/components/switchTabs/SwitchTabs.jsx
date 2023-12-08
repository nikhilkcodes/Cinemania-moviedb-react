// Importing necessary modules and styles
import React, { useState } from "react";
import "./style.scss";

// Functional component SwitchTabs that takes data and onTabChange as props
const SwitchTabs = ({ data, onTabChange }) => {
    // State variables for the selected tab index and the left position of the moving background
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    // Function to handle tab activation and movement of the background
    const activeTab = (tab, index) => {
        // Calculate the left position based on the index of the selected tab
        setLeft(index * 100);

        // Set a timeout to delay updating the selected tab state to create a smooth animation effect
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);

        // Callback to parent component with the selected tab data and index
        onTabChange(tab, index);
    };

    // Render the component
    return (
        <div className="switchingTabs">
            {/* Container for tab items */}
            <div className="tabItems">
                {/* Map through the data array to create individual tab items */}
                {data.map((tab, index) => (
                    <span
                        key={index}
                        // Add "active" class to the selected tab for styling
                        className={`tabItem ${selectedTab === index ? "active" : ""}`}
                        // Attach click event to activate the tab
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                {/* Moving background element with dynamic left position */}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

// Export the SwitchTabs component as the default export
export default SwitchTabs;

