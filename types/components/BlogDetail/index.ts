import { BlogDetailResponse } from "../../request";
import { ClassNameProps } from "../../string";

export interface BlogDetailProps extends ClassNameProps {
  data: BlogDetailResponse
};
