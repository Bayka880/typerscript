import { User, selectType } from "./type/type";
interface Props {
  user: User | undefined;
  isSelected: selectType;
  changed: string | undefined;
}

function UserContent(Props: Props): JSX.Element {
  return (
    <div>
      <p>{Props.changed}</p>
    </div>
  );
}
export default UserContent;
