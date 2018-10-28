/* eslint-disable no-unused-vars*/
const resolvers = {
  Query: {
    category(root, args, context) {
      return context.db.category({ name: args.name })
    },
    allCategories(obj, args, context) {
      return context.db.categories()
    },
    product(root, args, context) {
      return context.db.product({ name: args.name })
    },
    allProducts(obj, args, context) {
      return context.db.products()
    }
  },
  Category: {
    products(category, args, context) {
      return context.db.product({ category: args.category })
    }
  },
  Product: {
    category(product) {
      return { id: 1, name: "Category1"}
    }
  }
}
export default resolvers
