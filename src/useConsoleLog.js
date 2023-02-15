import { useEffect } from "react";

//creating a custom hook
function useConsoleLog(varName) {
  useEffect(() => {
    console.log(varName);
  }, [varName]);
}

export default useConsoleLog;