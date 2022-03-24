import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoadingBar from "react-top-loading-bar";

import { useDispatch } from "react-redux";
import { setLoadingBarProgress } from "./config/store/actions/product.actions";
import { useAppSelector } from "./config/store";
import { loadingBarSelector } from "./config/store/selectors/loadingBar.selectors";
import Router from "./config/routes/router";

function App() {
  const dispatch = useDispatch();
  const loadingProgress = useAppSelector(loadingBarSelector);
  return (
    <div>
      <LoadingBar
        progress={loadingProgress}
        onLoaderFinished={() => dispatch(setLoadingBarProgress(0))}
      />
      <Router />
    </div>
  );
}

export default App;
