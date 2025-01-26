// import React from "react";
// class Item extends React.Component {
//   render() {
//     return (<li>
//       {this.props.name},
//       ${this.props.price}
//     </li>)
//   }
// }

// class AddItem extends React.Component {

//   nameRef = React.createRef();
//   priceRef = React.createRef();
  
//   add = () => {
//     let name = this.nameRef.current.value;
//     let price = this.priceRef.current.value;
//     this.props.add(name,price)
//   }

//   render (){
//     return (
//       <div>
//         Item : <input type="text" ref={this.nameRef} style= {{marginRight:20}}/>
//         Price : <input type = "text" ref={this.priceRef} />
//         <button onClick={this.add} style= {{marginLeft:20}}>Add </button>
//       </div>
//     )
//   }
// }
// class App extends React.Component {
//   state = {
//     items: []
//   }

//   add= (name,price) => {
//     let id = this.state.items.length + 1;

//     this.setState({
//       items: [...this.state.items, { id, name, price }]
//     })
//   }

//   render() {
//     return (
//       <div >
//         <h3>Item Registration</h3>
//         <ul>
//           {
//             this.state.items.map(x => {
//               return (
//                 <Item key={x.id} name={x.name} price={x.price} />
//               )
//             })
//           }
//         </ul>
//         <AddItem add = {this.add} />
//       </div>
//     )
//   }
// }

// export default App;
// import React from "react";
// class Title extends React.Component {
//   render(){
//     return (<h1>{this.props.name}</h1>)
//   }
// }

// class Header extends React.Component {
//   render (){
//     return (
//       <Title name ={this.props.name}/>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <Header name = "App Title"/>
//     )
//   }
// }

// export default App

import React, { useState, createRef } from 'react';

const Item = ({name,price}) => {
  <li>{name}, ${price}</li>
}

const App = props => {
  let [ items, setItems ] = useState([
    { id: 1, name: 'Apple', price: 0.99 },
    { id: 2, name: 'Orange', price: 0.89 },
]);


  let nameRef = createRef();
  let priceRef = createRef();

  let add = () => {
    let id = items.length + 1;
    let name = nameRef.current.value;
    let price = priceRef.current.value;

    setItems([
      ...items,
      {id,name,price}
    ])
  }

  return (
    <div>
      <ul>
        {items.map(i => (
          <Item key={i.id}name={i.name}price={i.price}/>
        ))}
      </ul>
      Name: <input type="text" ref={nameRef}/>
      Price : <input type="text" ref= {priceRef}/>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App;
