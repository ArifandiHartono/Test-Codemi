import React from 'react';
import Infosection from "../Infosection/Infosection";
import Infosection2 from "../Infosection/Infosection2";
import Infosection3 from "../Infosection/Infosection3";
import { HomeContainer } from '../../components/Home/Home.element.js';
import "./Home.css";

function Home() {
  return (
    <HomeContainer>
      <div className="positions">
      
      Codemi Home
      </div>
     <Infosection/>
     <div className="row position2">
            <div class="col-sm text-left">
            Recovered Case on Every Country
            </div>
            <div class="col-sm text-left mleft">
            Daily Api Confirmed and Death Corona
            </div>
      </div>
     <Infosection2/>
     <div className="row position2">
            <div class="col-sm text-left">
            Daily Confirmed
            </div>
      </div>
     <Infosection3/>
    </HomeContainer>
  );
}

export default Home;
