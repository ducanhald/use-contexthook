import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Para() {
  const theme = useContext(ThemeContext);
  return <p className={theme}>Content parameters</p>;
}
export default Para;
