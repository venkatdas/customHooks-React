import React from "react";
import { useState ,useCallback} from "react";
const UseeCopyToClipboard = () => {
//   const [copiedText, setCopiedText] = useState(null);

//   const copy = async (text) => {
//     if (!navigator?.clipboard) {
//       console.warn("Clipboard not supported");
//       return false;
//     }
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopiedText(text);
//       return true;
//     } catch (error) {
//       console.warn("Copy failed", error);
//       return false;
//     }
//   };

//   return [copiedText, copy];


    const copyToClipboard = useCallback((text) => {
      if (!navigator.clipboard) {
        // Clipboard API not available (consider a fallback or an error message)
        console.error("Clipboard not available");
        return;
      }
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }, []);

    return copyToClipboard;
};

export default UseeCopyToClipboard;
