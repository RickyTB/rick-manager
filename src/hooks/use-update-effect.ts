/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * Idea stolen from: https://stackoverflow.com/a/55075818/1526448
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useUpdateEffect(
  effect: EffectCallback,
  dependencies: DependencyList = []
) {
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    // eslint-disable-next-line
  }, dependencies);
}
