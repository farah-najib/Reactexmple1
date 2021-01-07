import React from "react";
import Card from "./Card"


const posts = [
    
  { id: 0, 
    content: {
      title: 'Cross Stitch',
      image:"../images/crossstitch.jpg",
      content: 'cross stitch example',
    },
    likeIsClicked: true,
    likes: 5 },
    { id: 1,
    content : {
      title: 'French Knote',
      image: "../images/frenchknote.jpg",
      content: 'french knote example',
    },
    likeIsClicked: true,
    likes: 15},
    { id: 2,
      content : {
        title: 'Embrodiry',
        image: '../images/embrodiry.jpg',
        content: 'imge',
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