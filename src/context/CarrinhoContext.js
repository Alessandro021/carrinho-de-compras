import React, {useState, createContext} from "react";

export const CarrinhoContext = createContext({})

function CarrinhoProvider({children}){
    const [carrinho, setCarrinho] = useState([])

    function adicionarItemNoCarrinho(novoItem){
       
        const indexDoItem = carrinho.findIndex(item => item.id === novoItem.id)

        if(indexDoItem !== -1){
             //O ITEM JA EXISTE NO CARRINHO, E SE EXISTIR ADICIONA + UMA QUANTIDADE

             let listaDoCarrinho = carrinho;
             listaDoCarrinho[indexDoItem].quantidade += + 1;
             listaDoCarrinho[indexDoItem].total = listaDoCarrinho[indexDoItem].quantidade * listaDoCarrinho[indexDoItem].preco;

             setCarrinho(listaDoCarrinho)
             return
        }

        let dado ={
            ...novoItem,
            quantidade: 1,
            total: novoItem.preco
        }

        setCarrinho(produtos => [...produtos, dado])
    }

    return(
        <CarrinhoContext.Provider
            value={{
                carrinho,
                adicionarItemNoCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;