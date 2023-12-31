"use client";

import React from 'react'
import OverviewLineChart from './OverviewLineChart';
import OverviewComposedChart from './OverviewComposedChart';

const OverviewMain = () => {
  return (
    <div>
      <OverviewLineChart />
      <OverviewComposedChart />
    </div>
  )
}

export default OverviewMain