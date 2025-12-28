import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='py-10 flex flex-col items-center justify-center'>
            <Image
                src='https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/error/image-1.png'
                alt='404 illustration'
                width={500}
                height={500}
                className='object-contain h-1/4'
            />
            <div className='flex flex-col items-center justify-center text-center'>
                <h2 className='mb-6 text-5xl font-semibold'>Whoops!</h2>
                <h3 className='mb-1.5 text-3xl font-semibold'>Something went wrong</h3>
                <p className='text-muted-foreground mb-6 max-w-sm'>
                    The page you&apos;re looking for isn&apos;t found, we suggest you back to home.
                </p>
                <Button asChild size='lg' className='rounded-lg text-base'>
                    <Link href='/'>Back to home page</Link>
                </Button>
            </div>



        </div>
    )
}

export default NotFound;
