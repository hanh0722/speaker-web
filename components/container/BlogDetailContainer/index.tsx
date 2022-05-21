import React, { FC } from "react";
import PropTypes from 'prop-types';
import { BlogDetailProps } from "../../../types/components/BlogDetail";
import { Container } from "../../core";
import Detail from "./Detail";

const BlogDetail: FC<BlogDetailProps> = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Container>
      <Detail data={data}/>
    </Container>
  )
};

BlogDetail.defaultProps = {

};

BlogDetail.propTypes = {

};

export default BlogDetail;