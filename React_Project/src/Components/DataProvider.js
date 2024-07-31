import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);

function DataProvider({ Children }) {

    const [account, setAccount] = useState()

    return (
        <DataContext.Provider value={{ account, setAccount }}>
            {Children}
        </DataContext.Provider>
    )
}

export default DataProvider;