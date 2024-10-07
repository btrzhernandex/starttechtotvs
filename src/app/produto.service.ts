import { Injectable } from "@angular/core";
import { produtos } from "./models/produtos.models";
@Injectable({
    providedIn: 'root'
})
export class ProdutoService{
    private produtos: produtos[] = [
        {id: 1, nome: 'Produto A', quantidade: 10, preco: 15.5},
        {id: 2, nome: 'Produto B', quantidade: 20, preco: 30.0},
        {id: 3, nome: 'Produto C', quantidade: 5, preco:50.0}
    ];
    constructor(){}

    getProdutos(): produtos[]{
        return this.produtos;
    }
    addProduto(produtos: produtos): void{
        this.produtos.push(produtos);
    }
    deleteProduto(id:number): void{
        this.produtos = this.produtos.filter(produtos => produtos.id !== id);
    }
    getProdutoById(id:number): produtos | undefined{
        return this.produtos.find(produto => produto.id == id);
    }
    updateProduto(updateproduto: produtos): void{
        const index =  this.produtos.findIndex((produto: { id: number; }) => produto.id === updateproduto.id);
        if(index !== -1){
            this.produtos[index] = updateproduto;
        }
    }
}
