import React, {useState, createContext} from "react";

export const CarrinhoContext = createContext({})

function CarrinhoProvider({children}){
    const [carrinho, setCarrinho] = useState([])
    const [total, setTotal] = useState(0);

    function adicionarItemNoCarrinho(novoItem){
       
        const indexDoItem = carrinho.findIndex(item => item.id === novoItem.id)

        if(indexDoItem !== -1){
             //O ITEM JA EXISTE NO CARRINHO, E SE EXISTIR ADICIONA + UMA QUANTIDADE

             let listaDoCarrinho = carrinho;
             listaDoCarrinho[indexDoItem].quantidade += + 1;
             listaDoCarrinho[indexDoItem].total = listaDoCarrinho[indexDoItem].quantidade * listaDoCarrinho[indexDoItem].preco;

             setCarrinho(listaDoCarrinho)
             valorTotalDoCarrinho(listaDoCarrinho)
             return
        }

        let dado ={
            ...novoItem,
            quantidade: 1,
            total: novoItem.preco
        }

        setCarrinho(produtos => [...produtos, dado])
        valorTotalDoCarrinho([...carrinho, dado])
    }

    function removerItemDoCarrinho(produto){
        const indexDoItem = carrinho.findIndex(item => item.id === produto.id)

        if(carrinho[indexDoItem]?.quantidade > 1){
            let listaDoCarrinho = carrinho;

            listaDoCarrinho[indexDoItem].quantidade = listaDoCarrinho[indexDoItem].quantidade -1;

            listaDoCarrinho[indexDoItem].total = listaDoCarrinho[indexDoItem].total -listaDoCarrinho[indexDoItem].preco

            setCarrinho(listaDoCarrinho)
            valorTotalDoCarrinho(listaDoCarrinho)
            return
        }

        const removerItem = carrinho.filter(item => item.id !== produto.id)
        setCarrinho(removerItem)
        valorTotalDoCarrinho(removerItem)
    }

    function valorTotalDoCarrinho(itens){
        let meuCarrinho = itens;
        let resultado = meuCarrinho.reduce((acumulador, objeto) => { return acumulador + objeto.total}, 0)

        setTotal(resultado.toFixed(2));
    }

    return(
        <CarrinhoContext.Provider
            value={{
                carrinho,
                adicionarItemNoCarrinho,
                removerItemDoCarrinho,
                total
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}
export default CarrinhoProvider;