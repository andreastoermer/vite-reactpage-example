import slate from '@react-page/plugins-slate';
import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';
import './App.css'
import {useState} from "react";

const cellPlugins = [slate()];

function App() {
  const [value, setValue] = useState<Value | null>(null);
  return (
    <div><Editor cellPlugins={cellPlugins} value={value} onChange={setValue} /></div>
  )
}

export default App
