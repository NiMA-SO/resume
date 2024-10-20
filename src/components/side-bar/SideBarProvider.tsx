import {  ReactNode, useReducer } from "react";
import sideBarContext from "./SideBarContext";
// import tasksReducer from "./reducers/TasksReducer";


//start
//میتونه در یک فایل دیگه هم قرار بگیره
interface True{
  type: true;
}
interface False{
  type: false;   
}

export type TaskAction = True | False;


const tasksReducer = (genreSelect: boolean , action: TaskAction): boolean => {
  switch(action.type){
      case false:
          return genreSelect = action.type
      case true:
          return genreSelect = action.type
  }
  return genreSelect;
}
// end


interface Props {
  children: ReactNode;
}

const SlideBarProvider = ({ children }: Props) => {
  const [sideBar, dispatch] = useReducer(tasksReducer, false);
  return (
    <sideBarContext.Provider value={{ sideBar, dispatch }}>
      {children}
    </sideBarContext.Provider>
  );
};

export default SlideBarProvider;
