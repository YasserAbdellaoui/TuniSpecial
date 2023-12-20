import React from 'react';

function VideoForm() {
  return (
    <div className='flex' align-justify p-20>
      
      
      <div className="video">
        <h2> Check Video 1</h2>
        <iframe
          title="What is Autism?"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/TJuwhCIQQTs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>This video explains what is autism and its types</p>
      </div>

      <div className="video">
        <h2>Check Video 2</h2>
        <iframe
          title="Video 2"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/YtvP5A5OHpU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>Discover with us early signs of autism</p>
      </div>
    </div>
  );
}

export default VideoForm;
