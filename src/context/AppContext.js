import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext()
export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({children}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [itemsInCart, setItemsInCart] = useState(JSON.parse(localStorage.getItem("itemsInCart")))
    const [isBuyModalActive, setBuyModalActive] = useState(false)
    const [isOverlayActive, setOverlayActive] = useState(false)

    return(
        <AppContext.Provider value={{
            searchQuery: searchQuery,
            itemsInCart: itemsInCart,
            isBuyModalActive: isBuyModalActive,
            isOverlayActive: isOverlayActive,
            setItemsInCart,
            setSearchQuery,
            setBuyModalActive,
            setOverlayActive
        }}>
            {children}
        </AppContext.Provider>
    )
}