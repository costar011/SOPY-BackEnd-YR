import Lecture from "../../../model/Lecture"; // Lecture DB를 쓰기 위해 import함

export default {
  // 외부에서 사용하겠다
  Query: {
    getAllLecture: async (_, args) => {
      try {
        const result = await Lecture.find({}, {});
        // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
