import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import React from "react";
import Day00 from "./components/Day 0/day_00";
import Day01 from "./components/Day 01/day_01";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Day02 from "./components/Day 02/day_02";
import Navigator from "./components/Navigator/Navigator";
import PageContext from "./context/Navigator";

function App() {
  // const { page } = React.useContext(PageContext);

  // let path = `/day0${page.pageno}`;
  // console.log(path);
  // const pgno = `${page.pageno}`;
  // // console.log(pgno);
  // if (pgno == 0) {
  //   path = "/";
  // }

  // let pages = [];
  // for (let i = 0; i <= 100; i++) pages.push(i);

  // let elems = pages.map((page) => {
  //   return;
  // });

  // console.log(React.createElement(elems[1]) === <Day01 />);
  // console.log(<Day01 />);
  // console.log(React.createElement(() => elems[1]));

  return (
    <div className="">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Day00 />} /> */}
          <Route path="/" element={<Day01 />} />
          <Route path="/day01" element={<Day02 />} />
        </Routes>
        <Navigator className="fixed-bottom" />
      </Router>
    </div>
  );
}

export default App;
