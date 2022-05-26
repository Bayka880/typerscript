import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { User, UserContextType } from "../components/type/type";
const intial = {
  users: [],
  setUsers: () => {},
};
const UserContext = createContext<UserContextType>(intial);
export const useUser: () => UserContextType = () => {
  return useContext(UserContext);
};
const UserProvider = ({ children }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  console.log(users);

  useEffect(() => {
    if (localStorage.getItem("users") === null) {
      console.log("inside effect");
      setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log("setting loca");
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
