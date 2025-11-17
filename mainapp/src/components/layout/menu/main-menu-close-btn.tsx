"use client";

import { useRouter } from "next/navigation";
import Icon from "../../ui/icon";
import { useEffect } from "react";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full flex justify-end items-center p-4">
      <div onClick={onMenuCloseHandler}>
        <Icon name="cancel" size={34} strokeWidth={1} />
      </div>
    </div>
  );
};

export default MainMenuCloseButton;
