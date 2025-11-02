"use client";

import Icon from "../ui/icon";

const MainMenuCloseButton = () => {
  function onMenuCloseHandler() {
    const main = document.querySelector("#main");

    if (main) {
      main.classList.remove("menu-open");
    }
  }

  return (
    <div
      className="w-full flex justify-end items-center p-4"
      onClick={onMenuCloseHandler}
    >
      <Icon name="cancel" size={44} strokeWidth={1} />
    </div>
  );
};

export default MainMenuCloseButton;
