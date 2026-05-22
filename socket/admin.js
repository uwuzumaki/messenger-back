import { instrument } from "@socket.io/admin-ui";

const admin = (io) => {
  instrument(io, {
    auth: false,
    mode: "development",
  });
};

export default admin;
