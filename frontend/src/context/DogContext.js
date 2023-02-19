import react, { useState, useContext, createContext, useEffect } from 'react';
import { csrfFetch } from '../store/csrf';


export const DogContext = createContext()
export const useDogs = () => useContext(DogContext)

export default function DogProvider({children}) {
    const [dogs, setDogs] = useState([])

    

    useEffect(() => {
        csrfFetch("/api/dogs")
            .then(response => response.json())
            .then(data => setDogs(data))
            .catch(error => console.error(error));
    }, [])
    

    return (
        <DogContext.Provider
        value={{dogs, setDogs}}
        >
            {children}
        </DogContext.Provider>
    )
}
