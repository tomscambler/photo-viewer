import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './PhotoViewer/PhotoViewer.css';
import { ImageSelector } from './PhotoViewer/ImageSelector';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';

function App() {
  
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/id/600/1600/900.jpg");

  return (
    <div>
      <h1>
        Photo Viewer
      </h1>
    
        <PhotoViewer imageUrl={imageUrl} />
        <ImageSelector setImageUrl={setImageUrl}/>
    </div>
  );
}

export default App
