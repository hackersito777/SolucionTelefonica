import { useState } from 'react';
import './App.css';
import Blog from './components/Blog';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <title>Mi Blog - Soluciones para errores de Samsung One UI Home</title>
        <meta name="description" content="Conoce las soluciones para el error de Samsung One UI Home que se sigue cerrando." />
        <meta name="keywords" content="Samsung, One UI, error, solución, blog" />
        <meta name="author" content="Yefer Orozco" />
        
        <Blog />
        
      </div>
    </>
  );
}

export default App;
