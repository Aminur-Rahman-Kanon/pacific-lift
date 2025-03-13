import React, { createContext } from "react";

export interface ContextType {
    sidedrawer: boolean,
    toggleSidedrawer: () => void
}

export const ContextProvider = createContext<ContextType | undefined> (undefined);