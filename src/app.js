import express from "express"; // express framework를 사용하기 위해 import함
import morgan from "morgan"; // debugging을 위해 morgan을 import함
import dotenv from "dotenv"; // dotenv를 쓰기 위해 import함
dotenv.config(); // dotenv.config() 함수 실행
import { graphqlHTTP } from "express-graphql";
import cors from "cors"; // cors를 쓰기 위해 import함
import bodyParser from "body-parser"; // express middleware body-parser 모듈을 쓰기 위해 import함
import schema from "../graphql/schemas";
import connect from "../db/mongo";

// express를 app에 넣는다.
const app = express();

// dotenv에 있는 PORT를 세팅하겠다.
app.set(`PORT`, process.env.PORT);

// app에게 morgan를 써야한다고 신호를 준다.
// dev <- 키워드
app.use(morgan(`dev`));

// connect(); <--- 함수
connect();

// app에게 사용자가 "/graphql" 일 때 cors() 실행하고, bodyPaser 실행하고 그다음 graphqlHTTP를 실행할건데 schema를 가지고 실행할거야.
app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// 설정 끝난 후 Server Start
app.listen(app.get(`PORT`), () => {
  console.log(
    `[SOPY SERVER START]:: ${process.env.PORT}, WITH GraphQL - MongoDB`
  );
});
