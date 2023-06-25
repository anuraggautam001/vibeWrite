import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Post from './components/Post';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/post/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
