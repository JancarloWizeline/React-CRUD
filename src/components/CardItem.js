import { Card, Avatar } from "antd";
const { Meta } = Card;

const CardItem = ({ title, description, image }) => {
  return (
    <Card bordered={false} style={{ width: "100%", marginTop: "1rem" }}>
      <Meta
        avatar={<Avatar src={image} />}
        title={title}
        description={description}
      />
    </Card>
  );
};

export default CardItem;
