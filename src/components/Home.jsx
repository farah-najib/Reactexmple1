
import React from "react";

function Home() {
  return (
    <div className="home">
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
    </div>
  );
}

export default Home;