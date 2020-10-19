import React from 'react';
import Infosection from "../Infosection/Infosection";
import Infosection2 from "../Infosection/Infosection2";
import Infosection3 from "../Infosection/Infosection3";
import { HomeContainer } from '../../components/Home/Home.element.js';

function Home() {
  return (
    <HomeContainer>
     <Infosection/>
     <Infosection2/>
     <Infosection3/>
    </HomeContainer>
  );
}

export default Home;
