import { useEffect } from "react";
import { Card, Image, List, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import {
  ApiSuccess,
  PreviewImages,
  ApiFailure,
} from "../redux/reducers/ApiReducer";

const Home = () => {
  const dispatch = useDispatch();
  const searcedText = useSelector((state) => state.apireducer.searcedText);
  const loading = useSelector((state) => state.apireducer.loader);
  const data = useSelector((state) => state.apireducer.data);
  const previewImages = useSelector((state) => state.apireducer.previewImages);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searcedText}`)
      .then((res) => res.json())
      .then((response) => {
        dispatch(ApiSuccess(response.products));
      })
      .catch((err) => {
        console.log(err);
        dispatch(ApiFailure());
      });
  }, [searcedText]);

  return (
    <Space style={{ padding: "0px 16px" }} direction="vertical">
      <Header />
      <Typography.Text>
        Showing results for:
        <Typography.Text style={{ fontWeight: "bold" }}>
          {searcedText || "ALL"}
        </Typography.Text>
      </Typography.Text>
      <List
        loading={loading}
        dataSource={data}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        renderItem={(item) => {
          return (
            <Card
              hoverable
              key={item.id}
              style={{
                height: "auto",
                margin: "10px",
              }}
            >
              <Image
                src={item.thumbnail}
                preview={{ visible: false }}
                onClick={() => {
                  dispatch(PreviewImages(item.images));
                }}
                style={{
                  height: 300,
                }}
              ></Image>
            </Card>
          );
        }}
      />
      {previewImages.length > 0 ? (
        <Image.PreviewGroup
          preview={{
            visible: previewImages.length,
            onVisibleChange: (value) => {
              if (!value) {
                dispatch(PreviewImages([]));
              }
            },
          }}
        >
          {previewImages.map((image) => {
            return <Image key={image} src={image} />;
          })}
        </Image.PreviewGroup>
      ) : null}
    </Space>
  );
};

export default Home;
