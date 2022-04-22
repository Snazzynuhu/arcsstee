import React,{useState,useCallback,useContext,useEffect} from "react";
const url = 'http://link to json data of graduates';
const AppContext = React.createContext();
const AppProvider = ({children}) =>{
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a');
    const [graduates, setGraduates] = useState([]);
    return(
        <AppContext.Provider value={{
            loading,
            setSearchTerm,
            graduates,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}