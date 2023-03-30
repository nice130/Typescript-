const ages: number[] = [];
const gameBoard: string[][]=[];

type Product ={
    name:string;
    price:number;
}

const produt: Product={name:"coffee mug", price: 11.50}

function getTotal(products: Product[]): number{
    let total = 0;
    for(let product of products){
        total += product.price
    }
    return total; 
}