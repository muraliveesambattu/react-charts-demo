import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const PieChartWithLegends = () => {
  const [chartOptions] = useState({
    title: {
      text: "World Population Distribution",
    },
    data: [
      { region: "North America", value: 44 },
      { region: "South America", value: 55 },
      { region: "Europe", value: 13 },
      { region: "Asia", value: 43 },
      { region: "Africa", value: 22 },
      { region: "Australia", value: 34 },
      { region: "Antarctica", value: 5 },
    ],
    series: [
      {
        type: "pie",
        angleKey: "value", // Values for the pie slices
        labelKey: "region", // Labels for each slice
        calloutLabelKey: "region", // Ensures labels appear next to slices
        innerLabels: [
          {
            text: "Population", // Add inner text (optional)
            fontSize: 18,
            fontWeight: "bold",
          },
        ],
      },
    ],
    legend: {
      enabled: true, // Ensure legends are displayed
      position: "right", // Display legends on the right
      spacing: 10, // Add spacing between legend items
      marker: {
        shape: "square", // Customize legend marker shape
      },
    },
  });

  return (
    <div>
      <h1>Pie Chart with Legends</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <AgCharts options={chartOptions} />
      </div>
    </div>
  );
};

export default PieChartWithLegends;