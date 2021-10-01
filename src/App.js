import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react'
import Home from './Components/Pages/Home/Home'
import Layout from './Components/Pages/Layout/Layout'
import Subcategorias from './Components/Pages/Subcategorias/Subcategorias'
import Productos from './Components/Pages/Productos/Productos'
import Producto from './Components/Pages/Producto/Producto'


import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Layout className="App">
          <Route exact path="/" children={
            <Fragment>
              <ScrollToTop /> 
              <Home/>
            </Fragment>
          } />
          <Route exact path="/subcategoria/:id" children={
            <Fragment>
              <ScrollToTop /> 
              <Subcategorias />
            </Fragment>
          } />
          <Route exact path="/productos/:id" children={
            <Fragment>
              <ScrollToTop />
              <Productos />
            </Fragment>
          } />
          <Route exact path="/producto/:id" children={
            <Fragment>
              <ScrollToTop />
              <Producto />
            </Fragment>
          } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
