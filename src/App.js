import "antd/dist/reset.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import DetailNews from "./pages/DetailNews";
import ListNews from "./pages/ListNews";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<ListNews />} />
          <Route path="detail" element={<DetailNews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
