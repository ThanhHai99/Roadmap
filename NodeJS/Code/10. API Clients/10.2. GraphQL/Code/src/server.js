const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
 
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
    },
  }),
});

var query = '{ hello }';
 
graphql(schema, query).then((result) => {
  console.log(result);
  // Prints
  // {
  //   data: { hello: "world" }
  // }
});

var query = '{ BoyHowdy }';
 
graphql(schema, query).then((result) => {
  console.log(result);
  // Prints
  // {
  //   errors: [
  //     { message: 'Cannot query field BoyHowdy on RootQueryType',
  //       locations: [ { line: 1, column: 3 } ] }
  //   ]
  // }
});
