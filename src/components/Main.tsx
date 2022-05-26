import { useFetchHook } from "../API/FetchHook";
import { useUser } from "../context/UserContext";
import { UserContextType, User, selectType } from "./type/type";

import { useEffect, useState } from "react";
import UserContent from "./UserContent";
function Main(): JSX.Element {
  const { data, loading, error } = useFetchHook("https://randomuser.me/api");
  const { users, setUsers } = useUser();
  const [isSelected, setIsSelected] = useState<selectType>("name");
  const buttons: Array<selectType> = [
    "name",
    "email",
    "calendar",
    "address",
    "phone",
    "lock",
  ];
  const userName = `${data && data.name.first} ${data && data.name.last}`;
  const calendar = `${data?.dob}`;
  console.log(calendar);

  let changed;
  if (data && isSelected == "name") {
    changed = userName;
  } else if (isSelected == "email") {
    changed = data?.email;
  } else if (isSelected == "calendar") {
    changed = calendar;
  } else if (isSelected == "address") {
    changed = data?.location.country;
  } else if (isSelected == "lock") {
    changed = data?.password;
  } else {
    changed = data?.phone;
  }

  return (
    <>
      <div className="mx-auto">
        <div>
          <img src={data && data.picture.large} alt="" />
        </div>
      </div>
      <UserContent user={data} isSelected={isSelected} changed={changed} />

      {buttons.map((icon: string, i) => {
        return (
          <button style={style.button} key={i}>
            <img
              style={style.icon}
              src={`imain/${icon}.svg`}
              alt=""
              onClick={() => setIsSelected(icon as selectType)}
            />
          </button>
        );
      })}
    </>
  );
}
export default Main;
const style = {
  button: {
    width: "50px",
    border: "none",
    backgroundColor: "white",
  },
  icon: {
    width: "100%",
  },
};
