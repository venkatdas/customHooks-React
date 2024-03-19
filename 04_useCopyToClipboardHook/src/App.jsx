import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseeCopyToClipboard from './hooks/UseeCopyToClipboard'
function App() {
  const copyToClipboard = UseeCopyToClipboard();
  const textToCopy = "Copy me!";
//  const [copiedText, copy] = UseeCopyToClipboard();
  return (
    // <div>
    //   <button onClick={() => copy("YOU HAVE COPIED THIS!!")}>Copy Text</button>
    //   {copiedText && <span>Copied: {copiedText}</span>}
    // </div>

    <button onClick={() => copyToClipboard(textToCopy)}>
      Copy to Clipboard
    </button>
  );
}

export default App
