const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
// const { articles, categories } = require("../sampleData");
const Article = require("../models/Article");
const Category = require("../models/Category");

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    desc: { type: GraphQLString },
    markdown: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent, args) {
        return Category.findById(parent.categoryId);
      },
    },
    sanitizedHtml: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Article.findById(args.id);
      },
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve: () => {
        return Article.find();
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: () => {
        return Category.find();
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return Category.findById(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addArticle: {
      type: ArticleType,
      args: {
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        desc: { type: GraphQLString },
        markdown: { type: GraphQLString },
        categoryId: { type: GraphQLID },
      },
      resolve(parent, args) {
        const article = new Article({
          title: args.title,
          image: args.image,
          desc: args.desc,
          markdown: args.markdown,
          categoryId: args.categoryId,
        });
        return article.save();
      },
    },
    deleteArticle: {
      type: ArticleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        return Article.findByIdAndRemove(args.id);
      },
    },
    updateArticle: {
      type: ArticleType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        image: { type: GraphQLString },
        desc: { type: GraphQLString },
        markdown: { type: GraphQLString },
        categoryId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Article.findByIdAndUpdate(args.id, {
          title: args.title,
          image: args.image,
          desc: args.desc,
          markdown: args.markdown,
          categoryId: args.categoryId,
        });
      },
    },
    addCategory: {
      type: CategoryType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        const category = new Category({
          name: args.name,
        });
        return category.save();
      },
    },
    deleteCategory: {
      type: CategoryType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        Article.find({ categoryId: args.id }).then((articles) => {
          articles.forEach((article) => {
            article.remove();
          });
        });
        return Category.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
