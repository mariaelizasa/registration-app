import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomeScreen/Home";
import PF from "./pages/PFScreen/PF";
import PJ from "./pages/PJScreen/PJ";
import Password from "./pages/AcessPassword/Password";
import Review from "./pages/ReviewInformation/Review";
import { FormCard } from "./styles/global";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <FormCard>
              <Home />
            </FormCard>
          }
          path="/"
        />
        <Route
          element={
            <FormCard>
              <PF />
            </FormCard>
          }
          path="/pessoa-fisica"
        />
        <Route
          element={
            <FormCard>
              <PJ />
            </FormCard>
          }
          path="/pessoa-juridica"
        />
        <Route
          element={
            <FormCard>
              <Password />
            </FormCard>
          }
          path="/senha"
        />
        <Route
          element={
            <FormCard>
              <Review />
            </FormCard>
          }
          path="/revisar-informacoes"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
