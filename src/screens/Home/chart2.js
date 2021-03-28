import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import {BaseColor} from '@config';

export default function chart(){
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, 30, 56,60,70,80]
    return(
        <LineChart
    style={{ height: 30, width:100 }}
    data={data}
    svg={{ stroke: BaseColor.redColor }}
    contentInset={{ top: 20, bottom: 20 }}
    >
  </LineChart>
    );
}