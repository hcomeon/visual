import React from 'react';

export const Chart5 = () => {
  return (
    <div className="往年">
      <h2>往年人数对比</h2>
      <table>
        <thead>
        <tr>
          <th>年份</th><th>预计人数</th><th>实际人数</th><th>实际男性</th><th>实际女性</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2017</td><td>200</td><td>100</td><td>50</td><td>50</td>
        </tr>
        <tr>
          <td>2018</td><td>300</td><td>150</td><td>75</td><td>75</td>
        </tr>
        <tr>
          <td>2019</td><td>400</td><td>200</td><td>100</td><td>100</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};