import { gql } from "apollo-server";

const schema = gql`
type Query {
  category(name: String): Category
  allCategories: [Category]
  product(name: String): Product
  allProducts: [Product]
  getFortuneCookie: String
}
type Category {
  name: String
  products: [Product]
}
type Product {
  name: String
  description: String
  category: Category
}
`

export default schema
