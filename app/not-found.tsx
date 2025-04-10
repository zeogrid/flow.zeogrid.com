import Link from 'next/link'
import { IncomingMessage } from 'http'


interface SiteData {
  name: string;
}

async function getSiteData(domain: string): Promise<SiteData | null> { 
  if (domain === '/') {
    return { name: 'Example Site' }
  }
  return null
} 
export async function getServerSideProps(context: { req: IncomingMessage }) {
  const headersList = context.req.headers
  const domain = headersList.host || ''   
  const data = await getSiteData(domain)

  return {
    props: {
      data,  
    },
  }
} 
interface NotFoundProps {
  data: SiteData | null;   
}

const NotFound = ({ data }: NotFoundProps) => {
  if (!data) { 
    return (
      <div className='w-screen h-screen flex flex-col items-center justify-center gap-2 md:text-xl'>
        <h2>Not Found</h2>
        <p>Could not find the requested resource.</p>
        <p>
        Return to <Link className='text-primary' href="/">Home</Link>
        </p>
      </div>
    )
  }

  return (
    <div className=''>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find the requested resource</p>
      <p>
        Return to <Link className='text-primary' href="/">Home</Link>
      </p>
    </div>
  )
}

export default NotFound
