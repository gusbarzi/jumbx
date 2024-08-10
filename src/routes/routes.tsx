import { Route, Routes } from "react-router-dom";
import { TrustTheTip } from "../presentation/flows/trustTheTip";
import { PathEnum } from "./pathsEnum";
import { Taina } from "../presentation/flows/taina";
import { Barzi } from "../presentation/flows/barzi";
import { Home } from "../presentation/flows/home";
import { TrustTheTipB } from "../presentation/flows/trustTheTipB";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={PathEnum.HOME} element={<Home />} />
      <Route path={PathEnum.PORTAL_T} element={<TrustTheTip />} />
      <Route path={PathEnum.PORTAL_B} element={<TrustTheTipB />} />
      <Route path={PathEnum.TO_T} element={<Taina />} />
      <Route path={PathEnum.TO_B} element={<Barzi />} />
    </Routes>
  )
};
