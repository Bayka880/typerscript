import { useEffect } from "react";
import { useUser } from "../context/UserContext";
import { User } from "./type/type";

function Customer(): JSX.Element {
  const { users, setUsers } = useUser();

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
  }, []);
  console.log(users);
  return (
    <div>
      <div>Gentlemen </div>
      <div>
        {users &&
          users.map((e: User, i: number) => {
            return (
              <div key={i}>
                <img src={e.picture.large} alt="" />
              </div>
            );
          })}
      </div>
      <div> Ladies</div>
    </div>
  );
}
export default Customer;
