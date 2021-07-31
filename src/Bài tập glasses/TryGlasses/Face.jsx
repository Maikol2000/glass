import React, { Component } from "react";
import "../CSS/main.css";
export default class Face extends Component {
  glassesList = [
    {
      nameGlass: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      nameGlass: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    url: './glassesImage/v1.png',
    nameGlass: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
  handleChangeGlass = (nameGlass, url, desc) => {
    this.setState({
      nameGlass, url, desc
    })
    console.log(nameGlass, url, desc);
}
  render() {
    const {url, nameGlass, desc} = this.state;

    return (
      <div className='face' style={{backgroundImage: `url('./glassesImage/background.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
        {/* Modal */}
        <div className="row" style={{paddingTop:'100px'}}>
          <div className="col-6">
            <div className="faceCard">
              <div className="changeGlass">
                <img style={{width:"65%", opacity:'.7'}} src={url}/>
              </div>
              <img
                style={{ height: '310px',
                  width: '250px'}}
                className="card-img-top"
                src="./glassesImage/model.jpg"
              />
              <div className="faceText">
                <h5 className="faceTextH5">
                  {nameGlass}
                </h5>
                <p className="faceTextP">
                  {desc}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img
              className="imgModel"
              src="./glassesImage/model.jpg"
            />
          </div>
        </div>
        <div>
        {/* List Glasses */}
        <div className="glasses container">
          {this.glassesList.map((glass, index) => {
              const {nameGlass ,url ,desc} = glass
            return (
              <div key={index} className='glassesChild' onClick={() => this.handleChangeGlass(nameGlass, url, desc)}>
                <img src={url} />
              </div>
            );
          })}
        </div>
      </div>
        
      </div>
    );
  }
}