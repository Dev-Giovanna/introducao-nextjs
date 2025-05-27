export default function Products(){
    const produtos = [
        {Id: 4567,  Produto: "Esfoliante Corporal", Preço: 25},
        {Id: 8901,  Produto: "Lenço Demaquilante", Preço: 15},
        {Id: 9976,  Produto: "Sabonete Líquido", Preço: 32},

    ]
    
    return(
        <div>
            <h1> Produtos </h1>
           {produtos.map((produto)=>{
               return(<li key={produto.Id}> {produto.Produto}: R${produto.Preço},0 </li>)
           })}
        </div>
    )
}