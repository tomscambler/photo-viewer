import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './PhotoViewer/PhotoViewer.css';
import { ImageSelector, getImageUrls } from './PhotoViewer/ImageSelector';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Photo Viewer
      </h1>
        <PhotoViewer picture_url={"https://picsum.photos/id/600/1600/900.jpg"} />
        <ImageSelector />
    </div>
  );
}

export default App
