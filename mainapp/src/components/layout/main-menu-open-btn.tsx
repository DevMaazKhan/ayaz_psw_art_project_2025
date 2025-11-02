"use client";

import Icon from "../ui/icon";

const MainMenuOpenButton = () => {
  function onMenuOpenHandler() {
    const main = document.querySelector("#main");

    if (main) {
      main.classList.add("menu-open");
    }
  }

  return (
    <div>
      <Icon onClick={onMenuOpenHandler} name="menu" size={34} />
    </div>
  );
};

export default MainMenuOpenButton;
