import React, { Component } from 'react';
import Card from "./Card"
const posts = [
    
  { id: 0, 
    content: {
      title: 'Echinacea flower',
      image: 'https://leoraw.com/images/slidein/echinacea-200px.jpg',
      content: 'Grow some echinacea',
    },
    likeIsClicked: true,
    likes: 5 },
    { id: 1,
    content : {
      title: 'Lake in New York State',
      image: 'https://www.leoraw.com/images/slidein/lake-400px.jpg',
      content: 'Worth a visit',
    },
    likeIsClicked: true,
    likes: 15},
    { id: 2,
      content : {
        title: 'Street in Jerusalem',
        image: 'https://leoraw.com/images/slidein/jerusalem-street-400px.jpg',
        content: 'Street in Valley of Refaim',
      },
      likeIsClicked: true,
      likes: 8},
] 
export default class Header extends Component {

  render() {
    

    return (
        <header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>

</header>

   
  )
  
    }
}