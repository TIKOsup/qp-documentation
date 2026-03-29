export default function Main({ children }) {
  return (
    <div className='mx-auto flex flex-col min-h-screen w-full max-w-7xl border-x'>
      <main className='flex w-full flex-1 flex-col gap-6 p-4'>
        {children}
      </main>
    </div>
  );
}