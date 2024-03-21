import { Provider } from "react-redux";
import store from "./rtk/store";
import Layout from "./Layout";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}
