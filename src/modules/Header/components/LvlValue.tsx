import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const LvlValue = () => {
  const lvlValue = useSelector((state: RootState) => state.clickToEarn.lvl); // Получаем текущий уровень

  return <input id="level" type="text" value={lvlValue.toString()} readOnly />;
};

export default LvlValue;
