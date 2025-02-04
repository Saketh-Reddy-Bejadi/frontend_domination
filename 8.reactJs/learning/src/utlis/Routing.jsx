import { Route, Routes } from "react-router-dom";
import Card_1 from "../components/Card_1";
import UseStateHook1 from "../components/UseStateHook1";
import UseStateHook2 from "../components/UseStateHook2";
import DataDrillingViaProps1 from "../components/DataDrillingViaProps1";
import FormHandlingUseForm from "../components/FormHandlingUseForm";
import FormHandlingUseRef from "../components/FormHandlingUseRef";
import FormHandlingControlledComponents from "../components/FormHandlingControlledComponents";
import Home from "../components/Home";
import Users_childRouting from "../components/Users_childRouting";
import UserData_childRouting from "../components/UserData_childRouting";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<Card_1 />} />
        <Route path="/use_state1" element={<UseStateHook1 />} />
        <Route path="/use_state2" element={<UseStateHook2 />} />
        <Route path="/data_drilling1" element={<DataDrillingViaProps1 />} />
        <Route path="/use_ref" element={<FormHandlingUseRef />} />
        <Route
          path="/controlled"
          element={<FormHandlingControlledComponents />}
        />
        <Route path="/use_form" element={<FormHandlingUseForm />} />
        <Route path="/users" element={<Users_childRouting />}>
          <Route path="/users/:name" element={<UserData_childRouting />} />
        </Route>
        {/* :name will be the parameter can be differ and accessed */}
        {/* This specifies the URL pattern that this route will match. The :name part is a URL parameter, which means it can be any value. For example, /users/john and /users/jane would both match this route. */}
      </Routes>
    </>
  );
};

export default Routing;
