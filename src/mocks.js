import casual from 'casual'

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    category: (root, args) => ({ name: args.name }),
  }),
  Category: () => ({ name: () => casual.title}),
  Product: () => ({ name: casual.title, description: casual.description }),
}

export default mocks
