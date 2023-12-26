// src/components/MyChart.js
import React, { useState, useEffect } from 'react';
import 'chart.js/auto';
import chartData from '../chartData';
import { Doughnut } from 'react-chartjs-2';

{
  /*Initialize state for the chart Data*/
}
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
      color: getComputedStyle(document.documentElement).getPropertyValue('--slate').trim(),
      plugins: {
        title: {
          display: true,
          text: '        Languages over All Time', // this pained me to write, but I couldn't find any other way to adjust the title
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
          text: '        Updates Daily',
          align: 'center',
          color: getComputedStyle(document.documentElement).getPropertyValue('--slate').trim(),
          font: {
            family: getComputedStyle(document.documentElement)
              .getPropertyValue('--font-mono')
              .trim(),
          },
        },
        legend: {
          labels: {
            font: {
              family: getComputedStyle(document.documentElement)
                .getPropertyValue('--font-sans')
                .trim(),
            },
          },
          position: 'left',
        },
      },
    },
  });

  useEffect(() => {
    const lightestNavy = getComputedStyle(document.documentElement)
      .getPropertyValue('--lightest-navy')
      .trim();

    {
      /* Exclude some of irrelevant data*/
    }
    const excludeList = ['Other', 'IDEA_MODULE', 'Git Config', 'GitIgnore file', 'INI', 'Text'];
    const filteredData = chartData.data.filter(item => !excludeList.includes(item.name));

    {
      /* Loop over the json file, get all the relevant data (crazy how JS can just...DO that?)*/
    }
    const languages = filteredData.map(item => item.name);
    const percentages = filteredData.map(item => item.percent);
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

  return <Doughnut data={chartConfig} options={chartConfig.options} />;
};

export default CodeChart;
