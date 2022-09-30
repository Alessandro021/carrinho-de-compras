import React, {useState, createContext} from "react";

export const CarrinhoContext = createContext({})

function CarrinhoProvider({children}){
    const [carrinho, setCarrinho] = useState([])

    return(
        <CarrinhoContext.Provider
            value={{
                carrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;