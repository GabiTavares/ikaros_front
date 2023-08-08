import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import 'devextreme/dist/css/dx.material.blue.light.css';

import { data } from '../data.js';

const currentDate = new Date(2023, 7, 7);
const views = ['month', 'week', 'workWeek', 'agenda'];

function Schedule() {
  
    return (
      <Scheduler
        timeZone="America/Sao_Paulo"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        width={1278}
        startDayHour={7}
        endDayHour={20} />
    );
  }

export default Schedule;