import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext()
export function useApp() {
    return useContext(AppContext)
}

export function AppProvider({children}) {

    const [searchQuery, setSearchQuery] = useState("")

    return(
        <AppContext.Provider value={{
            searchQuery: searchQuery,
            setSearchQuery
        }}>
            {children}
        </AppContext.Provider>
    )
}