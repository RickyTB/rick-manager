import { useEffect, EffectCallback } from "react";

export function useErrorEffect(effect: EffectCallback, error: any) {
  useEffect(() => {
    if (!error) return;
    return effect();
    // eslint-disable-next-line
  }, [error]);
}
