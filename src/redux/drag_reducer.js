const initialState = {
dragElements: [{
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

  }]
}

export default function drag_reducer(initialState = initialState, action) {
    
        switch (action.type) {
            case CHANGE_STATUS: {
                
                return  state.map(c => {
                        if (action.payload.id == c.id) {
                            return {...c, status: action.payload.status }
                        }
    
                        return {...c}
                    })
            }
    
            default:
                
                return {...state}
            
        }
    

}