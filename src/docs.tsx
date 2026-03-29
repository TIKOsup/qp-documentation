import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Main from '@/components/container'
import Footer from '@/components/footer'

export default function Docs() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Header />

      <Main>
        <div className='mx-auto'>
          <h1 className='text-4xl font-bold mb-4'>Documentation</h1>
        </div>
      </Main>

      <Footer />
    </div>
  );
}