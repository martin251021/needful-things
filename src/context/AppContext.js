import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext()
export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({children}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [itemsInCart, setItemsInCart] = useState([])

    return(
        <AppContext.Provider value={{
            searchQuery: searchQuery,
            itemsInCart: itemsInCart,
            setItemsInCart,
            setSearchQuery
        }}>
            {children}
        </AppContext.Provider>
    )
}