import { PAGE_TYPE } from "@/src/utils/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useConfirm = () => {
  const router = useRouter();
  const { query } = router;
  const {  page } = query;

  useEffect(() => {
    console.log( page, "text");
  }, []);
  return {
    page,
  };
};
