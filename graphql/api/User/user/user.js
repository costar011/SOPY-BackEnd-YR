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
    },
  },
};
