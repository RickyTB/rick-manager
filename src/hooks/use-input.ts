import { Dispatch, SetStateAction, useCallback, useState } from "react";

export const useInput = (
  initialValue = ""
): [string, (e: any) => void, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback((e) => setValue(e.target.value), []);
  return [value, handleChange, setValue];
};
