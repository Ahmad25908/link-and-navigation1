'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <><h1 className='bg-lime-400 text-4xl'> My Name Page</h1>
    <button type="button" onClick={() => router.push('/')}>
      <h1 className='text-bold text-2xl text-black'>Home</h1>
    </button>
  </>)}
// }https://github.com/Ahmad25908/link-and-navigation2.git