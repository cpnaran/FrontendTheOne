

import { RootState } from "@/src/redux/store";
import  { useRouter } from "next/router";
import { useSelector } from "react-redux";


export const useLayout = () => {
   const router = useRouter();  
  const header = useSelector((state: RootState) => state.layout.header);
  const footer = useSelector((state: RootState) => state.layout.footer);
  const sidebar = useSelector((state: RootState) => state.layout.sidebar);
  const { pathname, asPath,locale, query } = router;
  // const dispatch = useAppDispatch();

  return {
    header,
    footer,
    pathname,
    asPath,
    locale,
    query,
    sidebar 
  };
};
