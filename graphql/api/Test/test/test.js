import Test from "../../../model/Test"; // Test DB를 쓰기 위해 import함

export default {
  // 외부에서 사용하겠다
  Query: {
    // Qurey 데이터 갖고오는 것 빼고는 전부 다  Mutation 이다.
    getAllTest: async (_, args) => {
      try {
        const result = await Test.find({}, {});
        // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
