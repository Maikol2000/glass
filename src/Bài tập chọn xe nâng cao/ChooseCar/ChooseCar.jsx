import React, { Component } from "react";

export default class ChooseCar extends Component {
  CarList = [
    {
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "./images/images-black/images-black-1/civic-1.jpg",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/"
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/"
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/"
        }
      ]
    },
    {
      title: "Modern Steel",
      type: "Metallic",
      img: "./images/icons/icon-steel.jpg",
      srcImg: "./images/images-steel/images-steel-1/civic-1.jpg",
      color: "Steel",
      price: "20,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-steel/images-steel-1/"
        },
        {
          idWheel: 2,
          srcImg: "images-steel/images-steel-2/"
        },
        {
          idWheel: 3,
          srcImg: "images-steel/images-steel-3/"
        }
      ]
    },
    {
      title: "Lunar Silver",
      type: "Metallic",
      img: "./images/icons/icon-silver.jpg",
      srcImg: "./images/images-silver/images-silver-1/civic-1.jpg",
      color: "Silver",
      price: "21,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-silver/images-silver-1/"
        },
        {
          idWheel: 2,
          srcImg: "images-silver/images-silver-2/"
        },
        {
          idWheel: 3,
          srcImg: "images-silver/images-silver-3/"
        }
      ]
    },
    {
      title: "Rallye Red",
      type: "Metallic",
      img: "./images/icons/icon-red.jpg",
      srcImg: "./images/images-red/images-red-1/civic-1.jpg",
      color: "Red",
      price: "22,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-red/images-red-1/"
        },
        {
          idWheel: 2,
          srcImg: "images-red/images-red-2/"
        },
        {
          idWheel: 3,
          srcImg: "images-red/images-red-3/"
        }
      ]
    },
  ];
  Wheels = [
    {
        idWheel: 1,
        img: "./images/icons/icon-wheel-1.jpg",
        title: "18-inch Alloy Wheels",
        srcImg: "images-red/images-red-1/"
      },
      {
        idWheel: 2,
        img: "./images/icons/icon-wheel-2.jpg",
        title: "18-inch 15-Spoke Black Alloy Wheels w/ Red Lip",
      },
      {
        idWheel: 3,
        img: "./images/icons/icon-wheel-3.jpg",
        title: "18-inch 5-Spoke Black Alloy Wheels",
      }
  ]
  state = {
    title: "Crystal Black",
    img: "./images/icons/icon-black.jpg",
    srcImg: "./images/images-black/images-black-1/civic-1.jpg",
    wheels: [
        {
            srcImg: "images-black/images-black-1/"
          },
          {
            srcImg: "images-black/images-black-2/"
          },
          {
            srcImg: "images-black/images-black-3/"
          }
    ]
  };
  handleCar = (srcImg) => {
      this.setState({
          srcImg
      })
  }
  handleWheels = (wheels, idWheel) => {
    console.log(wheels, idWheel);
  }
  render() {
      const {srcImg} = this.state;
    return (
        
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              src={srcImg}
              className="w-100"
            />
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-header text-left text-info">Exterior Color</div>
              <ul className="list-group list-group-flush">
                {this.CarList.map((car, index) => {
                  const { img, title, srcImg } = car;
                  return (
                    <li className="list-group-item" onClick={() => this.handleCar(srcImg)} >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={img}
                            style={{ width: "60px" }}
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          {title}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-5 wheels">
            <div className="card">
              <div className="card-header text-left text-info">Wheels</div>
              <ul className="list-group list-group-flush">
                {this.Wheels.map((wheel,index) => {
                  const { img, title, idWheel} = wheel;
                  return (
                    <li className="list-group-item" onClick={() => this.handleWheels(img, idWheel)} >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src={img}
                            style={{ width: "95px" }}
                          />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                          {title}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
      </div>
    );
  }
}
