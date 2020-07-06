import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
const Cards = ({name, email, imgUrl}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 my-2">
      <Card
    hoverable
    style={{ width: 240, margin:"auto" }}
    cover={<img alt="example" src={imgUrl} />}
  >
    <Meta title={name} description={email} />
  </Card>
    </div>
  )
}

export default Cards