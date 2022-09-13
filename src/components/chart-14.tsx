import React from 'react';

export const Chart14 = () => {
  return (
    <table>
      <thead>
      <tr>
        <th colSpan={2}>情况</th>
        <th>人数</th>
        <th>总计</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td rowSpan={4}>优秀</td>
        <td>95分以上</td>
        <td>10</td>
        <td rowSpan={4}>80</td>
      </tr>
      <tr>
        <td>90分-95分</td>
        <td>20</td>
      </tr>
      <tr>
        <td>85-90分</td>
        <td>20</td>
      </tr>
      <tr>
        <td>80-85分</td>
        <td>30</td>
      </tr>
      <tr>
        <td rowSpan={2}>良好</td>
        <td>70-80分</td>
        <td>22</td>
        <td rowSpan={2}>44</td>
      </tr>
      <tr>
        <td>60-70分</td>
        <td>22</td>
      </tr>
      <tr>
        <td rowSpan={3}>一般</td>
        <td>60分以下</td>
        <td>40</td>
        <td rowSpan={3}>68</td>
      </tr>
      </tbody>
    </table>
  );
};