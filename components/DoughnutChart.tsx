'use client';
import { Doughnut } from 'react-chartjs-2';
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return <Doughnut data={[]} />

}

export default DoughnutChart