import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import chartData from '../chartData';
import { Bar } from 'react-chartjs-2';

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
  });

  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false,
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
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataIndex = context.dataIndex;
            const dataItem = chartData.data[dataIndex];
            return `${dataItem.text} (${dataItem.percent}%)`;
          },
          title: (tooltipItems) => {
            return `Language: ${tooltipItems[0].label}`;
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          weight: 'bold',
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        cornerRadius: 5,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Languages',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours',
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
      'textmate',
      '.env file',
      'CSV/TSV'
    ];

    const filteredData = chartData.data.filter(item => !excludeList.includes(item.name));
    const languages = filteredData.map(item => item.name);
    const hours = filteredData.map(item => parseFloat(item.decimal));
    const colors = filteredData.map(item => item.color);

    setChartConfig({
      labels: languages,
      datasets: [
        {
          data: hours,
          borderColor: lightestNavy,
          backgroundColor: colors,
        },
      ],
    });
  }, []);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={chartConfig} options={chartOptions} />
    </div>
  );
};

export default CodeChart;