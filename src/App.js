import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Menu from '../src/components/menu/menu';
import Home from '../src/layouts/home/home';
//pages
import Go from '../src/layouts/go/go';
import HtmlCss from '../src/layouts/html-css/html-css';
import Js from '../src/layouts/js/js';
import Laravel from '../src/layouts/laravel/laravel';
import React_page from '../src/layouts/react/react';
import Vue from '../src/layouts/vue/vue';
//website
import Shopping from '../src/layouts/shopping/shopping';
import Personal from '../src/layouts/personal/personal';
import Film from './layouts/film/film';
import Music from './layouts/music/music';
import Social from '../src/layouts/social/social';
import Multipurpose from '../src/layouts/many-stuff/many-stuff';
//menu-page
import WorkDone from '../src/layouts/work-done/work-done';
import Proposals from '../src/layouts/proposals/proposals';
import Aboutus from '../src/layouts/aboutus/aboutus';
//404 page
import NotFound from '../src/layouts/404/404';

document.body.onload = () => {
  const el = document.querySelector(".home") || document.querySelector(".menu");
  let set = null;
  let place_y;

  el.onscroll = (e) => {
    const titles = document.querySelectorAll(".title");
    const scroll_y = e.target.scrollTop;
    for (let t of titles) {
      let rect = t.getBoundingClientRect();

      if (scroll_y <= place_y && place_y) {
        set = null;
      }

      if (rect.y < 0) {
        set = t;
        place_y = scroll_y - 1;
      }
    }
    if (set) {
      let title_top = document.querySelector(".home .title-top");
      let h3 = document.querySelector(".home .title-top h3");
      h3.innerText = `${set.children[0].textContent}`;
      title_top.classList.remove("none")
    } else {
      let title_top = document.querySelector(".home .title-top");
      title_top.classList.add("none")
    }

  }
}


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/react" component={React_page} />
        <Route exact path="/laravel" component={Laravel} />
        <Route exact path="/go" component={Go} />
        <Route exact path="/js" component={Js} />
        <Route exact path="/vue" component={Vue} />
        <Route exact path="/html-css" component={HtmlCss} />
        <Route exact path="/shopping-web" component={Shopping} />
        <Route exact path="/personal-web" component={Personal} />
        <Route exact path="/music-web" component={Music} />
        <Route exact path="/film-web" component={Film} />
        <Route exact path="/social-web" component={Social} />
        <Route exact path="/multipurpose-web" component={Multipurpose} />
        <Route exact path="/work-done" component={WorkDone} />
        <Route exact path="/proposals" component={Proposals} />
        <Route exact path="/about-us" component={Aboutus} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
