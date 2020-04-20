import React, { Component } from 'react'
import NavBar from './components/navbar/Navbar'
import TourList from './components/TourList/Tourlist'
import "@fortawesome/fontawesome-free/css/all.min.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <TourList></TourList>
      </React.Fragment>
    )
  }
}


