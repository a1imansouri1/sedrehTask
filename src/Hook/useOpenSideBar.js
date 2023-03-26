import { useEffect, useState } from "react";

export default function useOpenSideBar() {

  const [openSideBar, setOpenSideBar] = useState(localStorage.openSideBar)
  const closeSideBar = openSideBar ? false : true

  useEffect(() => {

    localStorage.setItem('openSideBar', openSideBar)

  }, [openSideBar, closeSideBar]);

  return [closeSideBar, setOpenSideBar]
}
