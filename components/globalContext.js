import React, { useState, useEffect, useRef, createContext} from "react";

const Context = createContext()

const Provider = ( { children } ) => {


  const [ domain, setDomain ] = useState("http://10.0.2.2:8000")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ userObj, setUserObj ] = useState()
  const [ appSettings, setAppSettings ] = useState({})


  const globalContext = {
    domain,
    
  }

  return <Context.Provider value={globalContext}>{children}</Context.Provider>

};

export { Context, Provider };
