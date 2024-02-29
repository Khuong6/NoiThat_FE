import { Col, Row } from "antd";
import Header from "../components/Header";

export const DetailedProject = () => {
  return (
    <>
      <Header />
      <div className="pt-64 mb-20 pl-20 pr-20">
        <div className=" ml-80 mb-10 text-2xl  ">
          Sáng tạo, trẻ trung và đa dạng trong từng thiết kế.
        </div>
        <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row></Row>
      </div>
    </>
  );
};
export default DetailedProject;
