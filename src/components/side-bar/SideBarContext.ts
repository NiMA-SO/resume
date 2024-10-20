import React, { Dispatch } from "react";
import { TaskAction } from "./SideBarProvider";


interface SideBarContextType{
    sideBar: boolean ;
    dispatch: Dispatch<TaskAction>
}

const sideBarContext = React.createContext<SideBarContextType>({} as SideBarContextType)

export default sideBarContext