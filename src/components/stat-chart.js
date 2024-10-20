// src/components/MyChart.js
import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import chartData from '../chartData';
import { Bar } from 'react-chartjs-2'; // Change from Doughnut to Bar

const CodeChart = () => {
  const [chartConfig, setChartConfig] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: '',
        backgroundColor: [],
        hoverOffset: 10,
      },
    ],
    options: {
      indexAxis: 'y',
      color: getComputedStyle(document.documentElement).getPropertyValue('--slate').trim(),
      plugins: {
        title: {
          display: true,
          text: 'Languages over All Time',
          align: 'center',
          color: getComputedStyle(document.documentElement).getPropertyValue('--green').trim(),
          font: {
            size: 14,
            family: getComputedStyle(document.documentElement)
              .getPropertyValue('--font-mono')
              .trim(),
          },
          padding: {
            top: 20,
          },
        },
        subtitle: {
          display: true,
          text: 'Updates Automatically',
          align: 'center',
          color: getComputedStyle(document.documentElement).getPropertyValue('--slate').trim(),
          font: {
            family: getComputedStyle(document.documentElement)
              .getPropertyValue('--font-mono')
              .trim(),
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Hours',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Languages',
          },
        },
      },
    },
  });

  useEffect(() => {
    const lightestNavy = getComputedStyle(document.documentElement)
      .getPropertyValue('--lightest-navy')
      .trim();

    const excludeList = [
      'Other',
      'TSConfig',
      'Makefile',
      'Bash',
      'IDEA_MODULE',
      'Git Config',
      'GitIgnore file',
      'INI',
      'Text',
      'Properties',
      'Java Properties',
      'XML',
      'Image (svg)',
    ];
    const filteredData = chartData.data.filter(item => !excludeList.includes(item.name));

    const languages = filteredData.map(item => item.name);
    const percentages = filteredData.map(item => item.decimal);
    const colors = filteredData.map(item => item.color);

    setChartConfig({
      labels: languages,
      datasets: [
        {
          data: percentages,
          borderColor: lightestNavy,
          backgroundColor: colors,
        },
      ],
    });
  }, []);

  return <Bar data={chartConfig} options={chartConfig.options} />;
};

export default CodeChart;
