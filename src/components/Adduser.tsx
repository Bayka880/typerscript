import { useEffect, useState } from "react";
import { User, UserContextType } from "./type/type";
import moment from "moment";
import { useUser } from "../context/UserContext";

function Adduser(): JSX.Element {
  const [user, setUser] = useState<User>();
  const [show, setShow] = useState<boolean>(false);

  const { users, setUsers } = useUser();

  function handler() {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((res) => setUser(res.results[0]));
  }
  function addUser() {
    console.log("add user funct");
    if (user) setUsers([...users, user]);
  }
  function handleClose() {
    window.location.reload();
  }

  return (
    <div>
      {!user && <button onClick={() => handler()}>Generate Random User</button>}
      <div>{<img src={user?.picture.large} alt="" />}</div>
      {user && (
        <div>
          Name:{user?.name.title}.{user?.name.first}
        </div>
      )}
      {user && <div> Age:{user && user.dob.age}</div>}
      {user && <div>Gender:{user?.gender}</div>}
      {user && <div>Email:{user?.email}</div>}
      {user && <div>Phone:{user?.phone}</div>}
      {user && (
        <div>Birthday:{moment(user?.dob.date).format("YYYY-MM-DD")}</div>
      )}
      {user && <button onClick={addUser}>Add user to list </button>}
      {user && <button onClick={handler}>Generate New</button>}
      {user && (
        <button type="submit" onClick={handleClose}>
          Cancel
        </button>
      )}
    </div>
  );
}
export default Adduser;
