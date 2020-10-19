import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {AiOutlineRight} from"react-icons/ai";
import {AiFillCaretDown} from"react-icons/ai";

import "./infosection.css";

function Dankmemes() {
  const [chartData, setChartData] = useState({});
  const [chartDataLine, setChartDataLine] = useState({});
  const [chartDataLine1, setChartDataLine1] = useState({});
  const [chartDataLine2, setChartDataLine2] = useState({});
  const [chartDataLine3, setChartDataLine3] = useState({});
  
  const [TotalConfirmed, setTotalConfirmed] = useState({});
  const [data, setData] = useState([]);
  var Total = 0;
  var TotalDaily =0;
  let Confirmed = [];
  let Country = [];
  let Confirm= [];
  let Dates = [];
  let Death = [];
  let Death2 = [];
  let Recovered =[];
  let Active =[];

  const chart = () => { 
    axios
      .get("https://covid19.mathdro.id/api/confirmed")
      .then(res => {
        console.log(res);
        const dataObj = res.data;
        const dataSet = [];
        //dilakukan agar data tidak terlalu banyak sehingga bentuk chart bagus
        Object.keys(dataObj).forEach(function(key) {
          if(!Country.includes(dataObj[key].countryRegion) && Country.length<7)
          {
          Confirmed.push(parseInt(dataObj[key].confirmed));
          Country.push(dataObj[key].countryRegion);
          Total= dataObj[key].confirmed+Total;
          dataSet.push(dataObj[key]);  
          Death.push(dataObj[key].deaths)
          }
          
        });
        setData(dataSet);

        // for (var i = 0; i < dataObj.lenght; i++) {
         
        // }
        setTotalConfirmed({
          TotalConfirmed: Total,
        });
        console.log(TotalConfirmed);
        setChartData({
          labels: Country,
          datasets: [
            {
              label: "level of thiccness",
              data: Confirmed,
              fill: false,
              backgroundColor: "rgba(0, 0, 255, 1)",
              borderWidth: 1
              
            }
            
          ]
        });
        // setChartDataLine({
        //   labels: Country,
        //   datasets: [
        //     {
        //       label: "level of thiccness",
        //       data: Confirmed,
        //       fill: false,
        //       backgroundColor: "rgba(0,0, 255, 1)",
        //       borderWidth: 2,
        //       borderColor: "rgba(0,0, 255, 1)",
              
        //       backgroundColor: "rgba(0,0, 255, 1)",
        //       pointBackgroundColor: "rgba(0,0, 255, 1)",
        //       pointBorderColor: "rgba(0,0, 255, 1)",
        //       pointHoverBackgroundColor: "rgba(0,0, 255, 1)",
        //       pointHoverBorderColor: "rgba(0,0, 255, 1)",
        //     },
        //     {
        //       label: "level of thiccness",
        //       data: Death,
        //       fill: false,
        //       backgroundColor: "rgba(0,0, 255, 1)",
        //       borderWidth: 2,
        //       borderColor: "rgba(0,0, 255, 1)",
        //       borderDash: [5, 5],
        //       backgroundColor: "rgba(0,0, 255, 1)",
        //       pointBackgroundColor: "rgba(0,0, 255, 1)",
        //       pointBorderColor: "rgba(0,0, 255, 1)",
        //       pointHoverBackgroundColor: "rgba(0,0, 255, 1)",
        //       pointHoverBorderColor: "rgba(0,0, 255, 1)",
        //     }
            
        //   ]
        // });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(Confirmed, Country);
    
  };

 
    
  const chartline = () => { 
    axios
      .get("https://covid19.mathdro.id/api/daily")
      .then(res => {
        console.log(res);
        const dataObj = res.data;
        const dataSet = [];

        var now = new Date();
        console.log(dataObj[1].confirmed.total);
        //dilakukan agar data tidak terlalu banyak sehingga bentuk chart bagus
        for ( var i = 0; i < 7; i++) {
        
          Confirm.push(dataObj[i].confirmed.total);
          Dates.push(dataObj[i].reportDate);
          Death2.push(dataObj[i].deaths.total);
          Recovered.push(dataObj[i].recovered.total);
          Active.push(dataObj[i].deltaConfirmedDetail.total);
          TotalDaily = dataObj[i].confirmed.total+TotalDaily;
          
        }
        console.log(Confirm, Death2, Dates);
        setChartDataLine({
          labels: Dates,
          datasets: [
            {
              label: "level of thiccness",
              data: Confirm,
              fill: false,
              backgroundColor: "rgba(0,0, 255, 1)",
              borderWidth: 2,
              borderColor: "rgba(0,0, 255, 1)",
              
              backgroundColor: "rgba(0,0, 255, 1)",
              pointBackgroundColor: "rgba(0,0, 255, 1)",
              pointBorderColor: "rgba(0,0, 255, 1)",
              pointHoverBackgroundColor: "rgba(0,0, 255, 1)",
              pointHoverBorderColor: "rgba(0,0, 255, 1)",
            },
            {
              label: "level of thiccness",
              data: Death2,
              fill: false,
              backgroundColor: "rgba(0,0, 255, 1)",
              borderWidth: 2,
              borderColor: "rgba(0,0, 255, 1)",
              borderDash: [5, 5],
              backgroundColor: "rgba(0,0, 255, 1)",
              pointBackgroundColor: "rgba(0,0, 255, 1)",
              pointBorderColor: "rgba(0,0, 255, 1)",
              pointHoverBackgroundColor: "rgba(0,0, 255, 1)",
              pointHoverBorderColor: "rgba(0,0, 255, 1)",
            }
            
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(Confirmed, Country);
    
  };




 useEffect(() => {
    chart();
    chartline();
  }, []);


  const renderTable = () => {
    let startIndex = 0;
    let endIndex = 5;

    return data.slice(startIndex, endIndex).map(user => {
      return (

    //   <div class="row">
    //     <div class="cell text-left">
    //     {user.countryRegion}
    //     </div>
    //     <div class="cell text-right ">  
    //     {user.confirmed}
    //     </div>
    //  </div>
          

          
          <div class=" text-white">
          <div class="row">
            <div class="col-sm text-left mt-1 mb-1">
            {user.countryRegion}
            </div>
            <div class="col-sm text-right mt-1 mb-1">
            {user.confirmed}
            </div>
            <hr className="hrwhite2"/>
       
          </div>
        </div>

      )
    })
  }

  return (
    <div className="App">
       <hr class="onHover"/>
              
      <h1>Dankmemes</h1>
      <div class="row">
       
        <div class="widthsection3 mr-5 bg-white shadow ml-auto text-white opacitytext">
        <div className="row">
            <div class="col-sm-2 hover2 ">
              <hr className="onHover1"/>
              <p className="MarginTop">Discusion</p>
              </div>
            <div class="col-sm-2 hover2 ">
            <hr className="onHover1"/>
            <p className="MarginTop ">Blog Post</p>
              </div>
            <div class="col-sm hover2 ">
              <hr className="onHover1"/>
              <p className="MarginTop2">Question And Answer</p>
              </div>
              <div class="col-sm-5">
               
              </div>

         </div>

          <div class="m-1">
         
            <div className="Chart margins2 ">
                <Bar
                  data={chartData}
                  options={{

                    
                    legend: {
                      display: false
                  },
                  tooltips: {
                      callbacks: {
                        label: function(tooltipItem) {
                                return tooltipItem.yLabel;
                        }
                      }
                  },
                    responsive: true,
                    title: { text: "THICCNESS SCALE", display: false },
                    scales: {
                      yAxes: [
                        {
                          position: 'right',
                          ticks: {
                            display:true,
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                          },
                          gridLines: {
                            display: false
                          }
                        }
                      ],
                      xAxes: [
                        {
                          display: true,
                          categoryPercentage: 1.0,
                          barPercentage: 0.93,
                          gridLines: {
                            display: true
                          }
                        }
                      ]
                    }
                  }}
                />
                
            </div>
            
                           
            <div class="col-sm text-left hover">
            REAL-TIMEREPORT <AiOutlineRight className="marginicon"/>
            </div>
                
          </div>            
       </div>
    </div>
    </div>
  );
};

export default Dankmemes;
