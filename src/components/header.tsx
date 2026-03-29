import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='w-full border-b'>
      <div className='mx-auto flex h-16 max-w-7xl items-center gap-2 p-4 border-x'>
        <div className="flex items-center justify-center">
          <p className='text-xl font-medium'>Qpragma Documentation</p>
        </div>
      </div>
    </header>
  );
}