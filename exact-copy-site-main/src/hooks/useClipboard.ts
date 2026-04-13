import { useState } from "react";

/**
 * Copy text to clipboard and track copy state.
 * `copied` resets to false after `resetDelay` ms.
 */
export function useClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
      return true;
    } catch {
      return false;
    }
  };

  return { copied, copy };
}
