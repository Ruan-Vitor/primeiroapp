import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({name: 'Ruan', age: 27})
    },[])

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}