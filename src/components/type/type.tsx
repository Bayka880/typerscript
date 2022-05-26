import React from "react";

export interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  gender: string;
  email: string;
  phone: string;
  dob: {
    age: number;
    date: string;
  };
  location: {
    city: string;
    country: string;
    state: string;
    street: {
      name: string;
    };
  };
  password: string;
  picture: {
    large: string;
  };
}
export type selectType =
  | "name"
  | "email"
  | "calendar"
  | "address"
  | "phone"
  | "lock";

export type UserContextType = {
  users: User[] | any;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};
