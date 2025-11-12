"use client";

import Icon from "../../ui/icon";
import { useRouter } from "next/navigation";

const SearchCloseButton = ({
  isIntercepted,
}: Readonly<{ isIntercepted: boolean }>) => {
  const router = useRouter();

  function onCloseHandler() {
    if (isIntercepted) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <div className="w-full flex justify-end items-center p-4">
      <div onClick={onCloseHandler}>
        <Icon name="cancel" size={44} strokeWidth={1} />
      </div>
    </div>
  );
};

export default SearchCloseButton;
