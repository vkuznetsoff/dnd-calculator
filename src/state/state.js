import Input from "../components/Input";
import Operations from "../components/Operations";
import Numbers from "../components/Numbers";
import Equal from "../components/Equal";

export const initialState = [
  {
      id: "input",
      order: 1,
      component: <Input />,
      status: "edit"
  
    },
  
    {
      id: "operations",
      order: 2,
      component: <Operations />,
      status: "edit"
  
    },
  
    {
      id: "numbers",
      order: 3,
      component: <Numbers />,
      status: "edit"
  
    },
    {
      id: "equal",
      order: 4,
      component: <Equal />,
      status: "edit" //  or "done"
  
    },

   
  ]