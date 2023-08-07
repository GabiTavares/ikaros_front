import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.material.blue.light.css';

import { data } from '../data.js';

const currentDate = new Date(2023, 7, 7);
const views = ['month', 'week', 'workWeek', 'day'];

function Schedule() {
  
    return (
      <Scheduler
        timeZone="Brasil"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        width={1278}
        startDayHour={7} />
    );
  }

export default Schedule;