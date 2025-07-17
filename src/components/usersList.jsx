import { useDispatch, useSelector } from "react-redux";
import { fetchUsers} from "../redux/user.action";

const UsersList = () => {
  const { isLoading, data, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleUsers =  () => {
    dispatch(fetchUsers())
  };
  return (
    <div className="usersList">
      {error !== "" && <p className="error">{error}</p>}
      <div className="card">
        <button onClick={handleUsers}>GET USERS</button>
        {isLoading && <div className="loading"></div>}
        <div className="users">
          {data && data.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      </div>
    </div>
  );
};
export default UsersList;
