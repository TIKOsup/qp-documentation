import { useTheme } from "@/components/theme-provider"
import { Paintbrush } from 'lucide-react'
import { Button } from '@/components/ui/button';

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className='w-full border-b'>
      <div className='mx-auto flex h-16 max-w-7xl items-center gap-2 p-4 border-x'>
        <div className="flex items-center justify-center">
          <p className='text-xl font-medium'>Qpragma Documentation</p>
        </div>
        <div className='ml-auto flex gap-4'>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Paintbrush className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}