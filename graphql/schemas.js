import path from "path"; // path-> 경로 경로를 추적할 수 있는 것을 impoert함
import { makeExecutableSchema } from "graphql-tools"; //
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;

// schemas.js 라는 파일은 graphql안에 있는 모든 녀석들을 전부다 파일로 수집해서 express에게 전달할 것 이다.
// graphql 두가지 타입으로 구성된다. 첫번째 .graphql .js 이녀석들을 우리는 얘네를 resolver라고 부른다.
