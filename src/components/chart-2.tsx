import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    {name: '50-59', 2011: 2, 2012: 3},
    {name: '60-69', 2011: 2, 2012: 3},
    {name: '70-79', 2011: 2, 2012: 3},
    {name: '80-89', 2011: 2, 2012: 3},
    {name: '90及以上', 2011: 2, 2012: 3},
  ];
  useEffect(() => {
     setInterval(() => {
      const newData = [
        {name: '50-59', 2011: 2, 2012: Math.random() * 10},
        {name: '60-69', 2011: 2, 2012: 3},
        {name: '70-79', 2011: 2, 2012: 3},
        {name: '80-89', 2011: 2, 2012: 3},
        {name: '90及以上', 2011: 2, 2012: 3},
      ];
      x(newData);
    }, 1000);
  }, []);

  const x = (data) => {
    myChart.current.setOption(createEchartsOptions({
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {show: false},
        axisLabel: {show: false},
      },
      yAxis: {
        axisTick: {show: false},
        type: 'category',
        data: data.map(i => i.name),
        axisLabel: {
          formatter(val) {
            return val.replace('年龄', '\n年龄');
          }
        }
      },
      series: [
        {
          name: '50-59',
          type: 'bar',
          data: data.map(i => i[2011]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034F9'
              }, {
                offset: 1,
                color: '#04A1FF'
              }]),
            }
          }
        },
        {
          name: '60-69',
          type: 'bar',
          data: data.map(i => i[2012]),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#B92AE8'
              }, {
                offset: 1,
                color: '#6773E7'
              }]),
            }
          }
        }
      ]
    }));
  };
  
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="bordered 性别及年龄">
      <h2>性别及年龄分布</h2>
      <div ref={divRef} className="chart"/>
      <div className="legend">
      <span className="first"/> 男性
      <span className="second"/> 女性
      </div>
    </div>
  );
};
