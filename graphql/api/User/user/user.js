import User from "../../../model/User";
import nodemailer from "nodemailer";
import smtpPool from "nodemailer-smtp-pool";

export default {
  Mutation: {
    registUser: async (_, args) => {
      const {
        name,
        email,
        nickName,
        mobile,
        zoneCode,
        address,
        detailAddress,
      } = args;

      try {
        const prevResult = await User.find({ email });

        if (prevResult.length !== 0) {
          console.log("Exist User Email Yet.");
          return false;
        } else {
          const result = await User.create({
            name,
            email,
            nickName: nickName,
            mobile,
            zoneCode: zoneCode,
            address,
            detailAddress,
          });

          return true;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
