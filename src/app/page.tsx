import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
<h1 className='bg-stone-600 text-4xl'>My Home Page</h1>      
<span className='bg-yellow-300'><Link href='homepage' className='text-red-700 text-2xl'>Home Page</Link></span><br />
<span className='bg-yellow-300'><Link href='namepage' className='text-red-700 text-2xl'>NamePage</Link></span>
    </div>
  )
}

export default page
