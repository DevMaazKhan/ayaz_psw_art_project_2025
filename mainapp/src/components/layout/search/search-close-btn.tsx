"use client";

import { useEffect } from "react";
import Icon from "../../ui/icon";
import { useRouter } from "next/navigation";
import { PATH } from "@/lib/constant/path";

const SearchCloseButton = ({
  isIntercepted,
}: Readonly<{ isIntercepted: boolean }>) => {
  const router = useRouter();

  function onCloseHandler() {
    if (isIntercepted) {
      router.back();
    } else {
      router.push(PATH.LANDING_PAGE);
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full flex justify-end items-center p-4 pr-4">
      <div onClick={onCloseHandler}>
        <Icon name="cancel" size={34} strokeWidth={1} />
      </div>
    </div>
  );
};

export default SearchCloseButton;
