const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "./cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows 10 Pro",
      version: "22H2",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Practice Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 22th 2023, 01:31 PM EST" },
      { label: "Execution End Time", value: "Nov 22th 2023, 01:35 PM EST" },
    ],
  },
});