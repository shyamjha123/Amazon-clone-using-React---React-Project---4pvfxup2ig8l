import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Skin care Products for all skin"
            price={200}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8FooisdI9HtDC1aanCbSF4ogKL4_4D6MeQ&usqp=CAU"
            rating={3}
          />
          <Product
            id="49538094"
            title="Nikon Camera"
            price={399.0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiVacTwHZemzEu701svbPXM6jLwiAqesT2btovpoyo7eRArp3elvWdESj_2mItSBghh0&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="54419823"
            title="Food-Items"
            price={500}
            image="https://images.moneycontrol.com/static-mcnews/2020/08/itc.jpg?impolicy=website&width=770&height=431"
            rating={4}
          />
          <Product
            id="41098920"
            title="SONY(Wireless-Headphone)"
            price={1500}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpPtgvGpytH8lzr5RUvMjLAjcGT7ZXA4V9g&usqp=CAU"
            rating={5}
          />
          <Product
            id="75879863"
            title="Canon Printer"
            price={700}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGmvP_ZLUEoE8SE6WBAAGI2VTOCXtqoBovw&usqp=CAU"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="53641287"
            title="Tshirt"
            price={100}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13pN7AqbJCTFxY9HVDhT2ZPr1O1O25AzPGg&usqp=CAU"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
