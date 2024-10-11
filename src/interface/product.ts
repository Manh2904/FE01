export interface Product {
    "_id": string,
    "name": string,
    "image":string,
    "price": number,
    "desc" :string
  }

export type ProductLite = Pick<Product, "image" | "name" | "price" | "desc" >