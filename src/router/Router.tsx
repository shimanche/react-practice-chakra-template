import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import WithSubnavigation from "../components/organisms/HeaderLayout";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { Setting } from "../pages/Setting";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route element={<WithSubnavigation />}>
        <Route path="/" element={<Login />} />
        <Route index element={<Login />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/*" element={<Page404 />} />
      </Route>
    </Routes>
  );
});
