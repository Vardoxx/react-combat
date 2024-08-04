import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import s from "./ValuesOutput.module.scss";

export const BalanceValue = () => {
  const balanceValue = useSelector(
    (state: RootState) => state.clickToEarn.value
  ); // Получаем текущий уровень

  return (
    <input
      className={s.value}
      id="balance"
      type="text"
      value={balanceValue.toString()}
      readOnly
    />
  );
};

export const LvlValue = () => {
  const lvlValue = useSelector((state: RootState) => state.clickToEarn.lvl); // Получаем текущий уровень

  return (
    <input
      style={{ width: "150px" }}
      className={s.value}
      id="level"
      type="text"
      value={lvlValue.toString()}
      readOnly
    />
  );
};
