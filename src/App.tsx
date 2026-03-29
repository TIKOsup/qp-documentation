import { Routes, Route } from "react-router-dom"
import Docs from '@/docs'
import File from '@/file/file'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/:file" element={<File />} />
      </Routes>
    </>
  )
}


