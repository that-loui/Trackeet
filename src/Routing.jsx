import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Layout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
