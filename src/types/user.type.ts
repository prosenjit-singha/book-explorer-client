import UserConst from "../constants/user.const";

type UserRole = (typeof UserConst.role)[number];
type Gender = (typeof UserConst.gender)[number];
type Status = (typeof UserConst.status)[number];

type User = {
  _id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  address?: string;
  role?: UserRole;
  gender?: Gender;
  dateOfBirth?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status?: Status;
};

export default User;
