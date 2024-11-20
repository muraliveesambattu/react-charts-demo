import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";

const ChartSelector = () => {
  const [selectedChart, setSelectedChart] = useState("chart1");

  // Common legend configuration
  const commonLegend = {
    enabled: true,
    position: "right", // Legend position on the right
    item: {
      marker: { shape: "circle" }, // Marker shape for legend
      label: { fontSize: 14 }, // Font size for legend items
    },
  };

  // Chart data for pie charts
  const chartData = {
    chart1: {
      options: {
        title: { text: "Sales by Region" },
        data: [
          { region: "North", sales: 120 },
          { region: "South", sales: 90 },
          { region: "East", sales: 130 },
          { region: "West", sales: 100 },
        ],
        series: [
          {
            type: "pie",
            angleKey: "sales",
            labelKey: "region",
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
      },
    },
    chart2: {
      options: {
        title: { text: "Expenses by Category" },
        data: [
          { category: "Marketing", expenses: 50 },
          { category: "R&D", expenses: 80 },
          { category: "Operations", expenses: 100 },
        ],
        series: [
          {
            type: "pie",
            angleKey: "expenses",
            labelKey: "category",
          },
        ],
      },
    },
    chart3: {
      options: {
        title: { text: "Monthly Revenue Distribution" },
        data: [
          { month: "January", revenue: 200 },
          { month: "February", revenue: 250 },
          { month: "March", revenue: 220 },
          { month: "April", revenue: 270 },
        ],
        series: [
          {
            type: "pie",
            angleKey: "revenue",
            labelKey: "month",
          },
        ],
      },
    },
    chart4: {
      options: {
        title: { text: "Employee Performance" },
        data: [
          { employee: "Alice", score: 90 },
          { employee: "Bob", score: 85 },
          { employee: "Charlie", score: 88 },
          { employee: "Diana", score: 92 },
        ],
        series: [
          {
            type: "pie",
            angleKey: "score",
            labelKey: "employee",
          },
        ],
      },
    },
    chart5: {
      options: {
        title: { text: "Website Traffic Sources" },
        data: [
          { source: "Organic", visits: 500 },
          { source: "Paid Ads", visits: 300 },
          { source: "Social Media", visits: 200 },
        ],
        series: [
          {
            type: "pie",
            angleKey: "visits",
            labelKey: "source",
          },
        ],
      },
    },
  };

  // Merge common legend configuration
  const configuredChartData = Object.keys(chartData).reduce((acc, key) => {
    acc[key] = {
      ...chartData[key],
      options: {
        ...chartData[key].options,
        legend: commonLegend, // Add common legend to each chart
      },
    };
    return acc;
  }, {});

  const handleDropdownChange = (event) => {
    setSelectedChart(event.target.value);
  };

  return (
    <div>
      <h1>Pie Chart Selector</h1>
      <select onChange={handleDropdownChange} value={selectedChart}>
        <option value="chart1">Sales by Region</option>
        <option value="chart2">Expenses by Category</option>
        <option value="chart3">Monthly Revenue Distribution</option>
        <option value="chart4">Employee Performance</option>
        <option value="chart5">Website Traffic Sources</option>
      </select>
      <div style={{ height: "500px", marginTop: "20px" }}>
        <AgCharts options={configuredChartData[selectedChart].options} />
      </div>
    </div>
  );
};

export default ChartSelector;