import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react'
import Home from './Components/Pages/Home/Home'
import Layout from './Components/Pages/Layout/Layout'


import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// function ScrollToProduct() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (window.screen.width > 600) {
//       window.scrollTo(900, 900);
//     } else {
//       window.scrollTo(600, 600);
//     }
//   }, [pathname]);

//   return null;
// }

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
          <Route exact path="/:subcategory" children={
            <Fragment>
              <ScrollToTop /> 
              <Home/>
            </Fragment>
          } />
          <Route exact path="/productos/:subcategory" children={
            <Fragment>
              <ScrollToTop />
              <Home />
            </Fragment>
          } />
          <Route exact path="/producto/:id" children={
            <Fragment>
              <ScrollToTop />
              <Home />
            </Fragment>
          } />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
