import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App5() {
  <div id="products" className="main"></div>
  let products = [
    {
      name: "black cofee",
      description: "Drink cofee stay healthy",
      price: 70,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdlXOHrFWWNgm51wxHSRS4UEjBrdqXFowMA&usqp=CAU",
    },
    {
      name: "milk cofee",
      description: "Drink cofee stay healthy",
      price: 90,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "cold cofee",
      description: "Drink cofee stay healthy",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5HnJX97iFyQ0V7kOWRTJXlhg8vbQ_UUb7g&usqp=CAU",
    },
    {
      name: "normal cofee",
      description: "Drink cofee stay healthy",
      price: 50,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "strong cofee",
      description: "Drink cofee stay healthy",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdlXOHrFWWNgm51wxHSRS4UEjBrdqXFowMA&usqp=CAU",
    },
    {
      name: "cofee",
      description: "Drink cofee stay healthy",
      price: 50,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YYvzR4pFgVuB-5XZwqMqo34V_mhiiXyb4Q&usqp=CAU",
    },
  ];
  // let cart = [];
  return (
    <div>
      <div className="san">< Header /></div>
      <div className="box">

        {products.map((e, i) => (

          <div key={i} className="box-2">
            {<img width="300px" height="300px" alt="" src={e.image}></img>}
            <div className="content">
              <b>Name : {e.name}</b>
              <hr />
              <b>{e.description}</b>
              <hr />
              <b>Price : {e.price}</b>
              <hr />
              <button>ADD</button>
            </div>
          </div>
        ))}
        {/* <div>
          {function don(i){
            cart[i] = products[i];
            cart.push((e) => {
             <div> { <img width="300px" height="300px" alt="" src={e.image}></img> }
             <b>Name : {e.name}</b>
              <hr />
              <b>{e.description}</b>
              <hr />
              <b>Price : {e.price}</b>
              <hr />
             </div>
            });
            }}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
