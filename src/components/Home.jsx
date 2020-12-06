import React from "react";
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


function Home() {
  return (
  
   <div className='card-grid-view'>
      {posts.map(e => (
        <Card 
          key={e.id}
          content={e.content}
          likes={e.likes}
          likeIsClicked={e.likeIsClicked}
          />
      ))}
    </div>
    
  );
}

export default Home;