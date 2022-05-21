import { BlogDetailResponse } from "../../request";
import { ClassNameProps } from "../../string";

export interface BlogListContainerProps extends ClassNameProps {
  blogs: Array<BlogDetailResponse>;
  total: number;
};
