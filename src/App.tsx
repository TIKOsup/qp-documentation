import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router-dom"
import Docs from '@/docs'
import File from '@/file/file'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/:file" element={<File />} />
      </Routes>
    </ThemeProvider>
  )
}


