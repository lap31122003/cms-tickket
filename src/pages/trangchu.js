import React from 'react';
import './css/trangchu.module.scss';
import { Chart } from "react-google-charts";
import { FaRegCalendarAlt } from "react-icons/fa";
import styles from './css/trangchu.module.scss';
import classNames from 'classnames/bind';
let tc = classNames.bind(styles);
export const data1 = [
    ["Year", "Doanh thu"],
    ["29/03 - 04/04", 1000],
    ["05/04 - 11/04", 2000],
    ["12/01 - 18/04", 660],
    ["19/04 - 25/04", 3030],
    ["26/04 - 02/05",1900 ],
  ];
  
  export const options1 = {
    title: "Doanh thu",
    curveType: "function",
    legend: { position: "bottom" },
  };

  export const data2 = [
    ["goive", "goi"],
    ["Vé đã sử dụng", 400],
    ["Vé chưa sử dụng",1000],
  ];
  export const options2 = {
    // title: "Gói gia đình",
    pieHole: 0.4,
    is3D: false,
  };

  export const data3 = [
    ["goive", "goi"],
    ["Vé đã sử dụng", 1000],
    ["Vé chưa sử dụng",400],
  ];
  
  export const options3 = {
    title: "Gói sự kiện",
    pieHole: 0.4,
    is3D: false,
  };
const Home = () => {
    return (
        <div> 
            <div className={tc('Apptrangchu')}>
              <h1 className={tc("h1")}>Thống kê</h1>
              <Chart
                chartType="LineChart"
                width="99%"
                data={data1}
                options={options1}
                />
                <div className={tc('text-tien')}>
                <p>Tổng danh thu theo tuần</p>
                <h4>525.145.000 đồng</h4>
                </div>
                <input className={tc("text-inputtc")} placeholder="01/05/2021"/>
                <FaRegCalendarAlt className={tc("iconlichtc")} color="rgba(255, 184, 0, 1)"/>
                <Chart
                chartType="PieChart"
                width="50%"
                height="250px"
                className={tc('data2')}
                data={data2}
                options={options2}
              />
              <Chart
                chartType="PieChart"
                width="50%"
                height="250px"
               className={tc('data3')}
                data={data3}
                options={options3}
              />
           </div>
        </div>
    );
};

export default Home;