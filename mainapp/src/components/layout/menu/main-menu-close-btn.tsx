"use client";

import { useRouter } from "next/navigation";
import Icon from "../../ui/icon";

const MainMenuCloseButton = ({
  isIntercepted,
}: Readonly<{ isIntercepted: boolean }>) => {
  const router = useRouter();

  function onMenuCloseHandler() {
    if (isIntercepted) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <div className="w-full flex justify-end items-center p-4">
      <div onClick={onMenuCloseHandler}>
        <Icon name="cancel" size={44} strokeWidth={1} />
      </div>
    </div>
  );
};

export default MainMenuCloseButton;
