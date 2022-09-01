import React, { useContext, useState } from "react";
import { useCrossState } from "../hooks/useCrossState";
import { useMediaQuery } from 'react-responsive'

const AppContext = React.createContext()
export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({children}) {

    const [searchQuery, setSearchQuery] = useState("")
    const [itemsInCart, setItemsInCart] = useCrossState("itemsInCart", []);
    const [isBuyModalActive, setBuyModalActive] = useState(false)
    const [isOverlayActive, setOverlayActive] = useState(false)
    const [isDelModalActive, setDelModalActive] = useState(false)
    const isMobile = useMediaQuery({ query: "(max-width: 900px)"})

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
            isDelModalActive: isDelModalActive,
            setItemsInCart,
            isMobile: isMobile,
            setSearchQuery,
            setBuyModalActive,
            setOverlayActive,
            setDelModalActive
        }}>
            {children}
        </AppContext.Provider>
    )
}