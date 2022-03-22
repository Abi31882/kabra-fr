import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../config/store";
import { userSelector } from "../config/store/selectors/auth.selectors";
import "./css/account.css";

const MyAccount = () => {
  const user = useAppSelector(userSelector);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="container mt-4 mb-4 p-3 d-flex justify-content-center"
    >
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img
              alt="meme"
              src="https://i.imgur.com/wvxPV9S.png"
              height="100"
              width="100"
            />
          </button>
          <span className="name mt-3">{user.userName}</span>{" "}
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">{user._id}</span>{" "}
            <span>
              <i className="fa fa-copy"></i>
            </span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">
              1069 <span className="follow">Followers</span>
            </span>
          </div>
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark">Edit Profile</button>{" "}
          </div>
          <div className="text mt-3">
            <span>
              Eleanor Pena is a creator of minimalistic x bold graphics and
              digital artwork.<br></br> Artist/ Creative Director by Day #NFT
              minting@ with FND night.{" "}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
