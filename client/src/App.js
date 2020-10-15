import React, { Suspense } from 'react';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


//React Lazy
const NavBar = React.lazy(() => import('./components/navbar/NavBar'));
const Home = React.lazy(() => import('./components/homePage/Home'));
const About = React.lazy(() => import('./components/about/About'));
const Footer = React.lazy(() => import('./components/Footer'));


export default function App() {

  return (
    <RecoilRoot>
      <Router>
          <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary>
              <NavBar />
            </ErrorBoundary>
              <Switch>
                  <Route exact path="/">
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                  </Route>
                  <Route exact path="/about">
                  <ErrorBoundary>
                    <About />  
                  </ErrorBoundary>
                  </Route>
              </Switch>
              <ErrorBoundary>
                <Footer />
              </ErrorBoundary>
          </Suspense>
          </div>
      </Router>
    </RecoilRoot>
  );
}
