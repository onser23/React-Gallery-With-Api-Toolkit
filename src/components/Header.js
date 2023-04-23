import { useDispatch } from "react-redux";

import { Input, Typography } from "antd";
import { SearchedText } from "../redux/reducers/ApiReducer";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography.Title style={{ textAlign: "center" }}>
        Gallery
      </Typography.Title>
      <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          dispatch(SearchedText(value));
        }}
      ></Input.Search>
    </>
  );
};

export default Header;
