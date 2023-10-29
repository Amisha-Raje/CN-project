import { Avatar, Box ,Divider,IconButton,Stack,Switch} from "@mui/material";
import { useTheme, styled } from  "@mui/material/styles";

import React from "react";
import { Outlet } from "react-router-dom";

import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import SideBar from "./SideBar";

const DashboardLayout = () => {

  const theme = useTheme();

  return (
    
    <Stack direction="row">
      {/*sidebar*/}
      <SideBar />
      <Outlet />
      </Stack>
  );
};

export default DashboardLayout;
