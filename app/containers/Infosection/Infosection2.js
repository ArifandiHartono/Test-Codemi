import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {AiOutlineRight} from"react-icons/ai";
import {AiFillCaretDown} from"react-icons/ai";
import "./infosection2.css";

function Dankmemes() {
  const [chartData, setChartData] = useState({});
  const [chartDataLine, setChartDataLine] = useState({});
  
  const [TotalConfirmed, setTotalConfirmed] = useState({});
  const [data, setData] = useState([]);
  const [datadaily, setData1] = useState([]);
  
  var Total = 0;
  let Confirmed = [];
  let Country = [];
  let Recovered =[];

  var today = new Date();
  today.setDate( today.getDate() - 2 );
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

    today = mm + '-' + dd + '-' + yyyy;
    console.log(today);
    console.log("https://covid19.mathdro.id/api/daily/"+today)


    const datadailyget = () => { 
        axios
          .get("https://covid19.mathdro.id/api/daily/"+today)
          .then(res => {
            console.log(res);
            const dataObj = res.data;
            const dataSet = [];
            //dilakukan agar data tidak terlalu banyak sehingga bentuk chart bagus
            Object.keys(dataObj).forEach(function(key) {
              dataSet.push(dataObj[key]);  
              
            });
            setData1(dataSet);
            
            console.log(dataSet);
            // for (var i = 0; i < dataObj.lenght; i++) {
             
            // }
            
            })
          .catch(err => {
            console.log(err);
          });
        console.log(Confirmed, Country);
        
      };
    
  

  const datarecovered = () => { 
    axios
      .get("https://covid19.mathdro.id/api/recovered")
      .then(res => {
        console.log(res);
        const dataObj = res.data;
        const dataSet = [];
        //dilakukan agar data tidak terlalu banyak sehingga bentuk chart bagus
        Object.keys(dataObj).forEach(function(key) {
          if(!Country.includes(dataObj[key].countryRegion) && Country.length<26)
          {
          dataSet.push(dataObj[key]);  
          }
          


        });
        setData(dataSet);

        // for (var i = 0; i < dataObj.lenght; i++) {
         
        // }
        setTotalConfirmed({
          TotalConfirmed: Total,
        });
        
        })
      .catch(err => {
        console.log(err);
      });
    console.log(Confirmed, Country);
    
  };

 
    
  


 useEffect(() => {
    datadailyget();
    datarecovered();
  }, []);


  const renderTable = () => {
    let startIndex = 0;
    let endIndex = 5;

    return data.slice(startIndex, endIndex).map(user => {
      return (

    
          
          <div class=" text-dark">
          <div class="row">
            <div class=" text-success col-sm text-left ml-4 mt-3 mb-3">
            {user.countryRegion}
            </div>
            <div class="col-sm text-right mt-3 mb-3">
            {user.confirmed}
            </div>
            <div class="col-sm text-right mt-3 mb-3 mr-3">
            {user.recovered}
            </div>
            <hr className="hrwhite3"/>
       
          </div>
        </div>

      )
    })
  }

  const renderTable2 = () => {
    let startIndex = 0;
    let endIndex = 5;

    return datadaily.slice(startIndex, endIndex).map(user => {
      return (

    
          
          <div class=" text-dark">
          <div class="row">
            <div class=" text-success col-sm text-left ml-4 mt-3 mb-3 ">
            {user.countryRegion}
            </div>
            <div class="col-sm text-right mt-3 mb-3">
            {user.confirmed}
            </div>
            <div class="col-sm text-right mt-3 mb-3 mr-3">
            {user.deaths}
            </div>
            <hr className="hrwhite3"/>
       
          </div>
        </div>

      )
    })
  }


  return (
    <div>
       <hr class="onHover"/>
              
      <h1>Dankmemes</h1>
      <div class="row">
        <div class=" containersize ml-auto bg-white shadow text-dark ">
          <div className="row">
          <div class="col-sm text-left ml-3 mt-4 mb-3 ">
                     Country
                  </div>
                  <div class="col-sm text-right mt-4 mb-3 ">
                  Confirmed
                </div>
                <div class="col-sm text-right mt-4 mr-3 mb-3 ">
                  Recovered
                </div>
            <hr className="hrwhite4"/>
       
          </div>
          {renderTable()}

          <div className="row">
          <div class="col-sm text-left ml-4 mt-4 pointer">
                    <p>Last 7 days <AiFillCaretDown/></p>
          </div>
        <div class="text-green col-sm text-right mt-4 mr-3 text-success pointer">
                 COURSE-REPORT <AiOutlineRight/>
        </div>
        </div>  

          </div>
        <div class="containersize mr-5 bg-white shadow ml-3 text-dark">
          <div class="m-1">
            <div className="row">
          <div class="col-sm text-left ml-3 mt-4 mb-3 mr-2">
                     Country
                  </div>
                  <div class="col-sm text-right mt-4 mb-3">
                  Confirmed
                </div>
                <div class="col-sm text-right mt-4 mr-3 mb-3">
                  Death
                </div>
            <hr className="hrwhite4"/>
       
          </div>
          {renderTable2()}  
          <div className="row marginbottoms ">
          <div class="col-sm text-left ml-4 mt-4 pointer">
                    <p>Last 7 days <AiFillCaretDown/></p>
          </div>
        <div class="col-sm text-right mt-4 mr-3 text-success pointer">
                 COURSE-REPORT <AiOutlineRight/>
        </div>
        </div>    
          </div>            
       </div>
    </div>
  </div>    
  );
};

export default Dankmemes;
