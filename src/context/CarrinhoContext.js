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

    function removerItemDoCarrinho(produto){
        const indexDoItem = carrinho.findIndex(item => item.id === produto.id)

        if(carrinho[indexDoItem]?.quantidade > 1){
            let listaDoCarrinho = carrinho;

            listaDoCarrinho[indexDoItem].quantidade = listaDoCarrinho[indexDoItem].quantidade -1;

            listaDoCarrinho[indexDoItem].total = listaDoCarrinho[indexDoItem].total -listaDoCarrinho[indexDoItem].preco

            setCarrinho(listaDoCarrinho)
            return
        }

        const removerItem = carrinho.filter(item => item.id !== produto.id)
        setCarrinho(removerItem)
    }

    return(
        <CarrinhoContext.Provider
            value={{
                carrinho,
                adicionarItemNoCarrinho,
                removerItemDoCarrinho
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;