import '../src/css/App.css';
import '../src/css/About.css';
import HomePage from './componentes/routes/Home/HomePage';
import Portfolio from '../src/componentes/routes/Portfolio/Portfolio'
import About from './componentes/routes/About me/About';
import Error404 from './componentes/routes/404/Error404';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>,
    errorElement:<Error404/>
  },
  {
    path:'/Portfolio',
    element: <Portfolio></Portfolio>
  },
  {
    path:'/About',
    element:<About/>
  }
]);
function App() {

  return (
   <>
    <RouterProvider router={router}/>
   </>
  );
}

export default App;
