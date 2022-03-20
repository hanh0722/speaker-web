import { PATH_HIDDEN_NAVIGATION } from "../constants/path"

export const isHiddenNavigation = (path: string) => {
    return PATH_HIDDEN_NAVIGATION.some(value => path.includes(value));
}