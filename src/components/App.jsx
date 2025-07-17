import { Provider } from "react-redux";
import UsersList from "./usersList";
import userStore from "../redux/user.store";

const App = () => {
  return (
    <Provider store={userStore}>
      <UsersList />
    </Provider>
  );
};
export default App;
