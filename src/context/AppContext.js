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

    const useEscape = function(onEscape) {
        React.useEffect(() => {
            const handleEsc = (event) => {
                if (event.keyCode === 27) 
                    onEscape()
            };
            window.addEventListener('keydown', handleEsc);
    
            return () => {
                window.removeEventListener('keydown', handleEsc);
            };
        }, []);
    }

    useEscape(() => {
        setBuyModalActive(false)
        setOverlayActive(false)
    })

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