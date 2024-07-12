import { memo } from "react";

const Logoo = () => {
  return <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>;
};
export const Logo = memo(Logoo);
