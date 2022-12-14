// Recoil を利用したグローバルな状態管理
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
