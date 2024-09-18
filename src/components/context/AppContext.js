import React, { createContext, useState, useEffect } from 'react'
export const AppContext = createContext();

export default function AppProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [backOpen, setBackOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const startLoading = () => {

        setLoading(true)
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }

    useEffect(() => {
        startLoading();
    }, [])

    return (
        <AppContext.Provider value={{ loading, setLoading, backOpen, setBackOpen, menuOpen, setMenuOpen }}>
            {children}
        </AppContext.Provider>
    )
}
