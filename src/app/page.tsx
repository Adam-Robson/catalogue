import Header from '@/components/header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='root'>
      <Header />
      <section className="name-logo-section">
        <div className="name-container">
          <p className='name font-sans'>
            ADAM
          </p>
          <p className='lastname name font-sans'>
            ROBSON
          </p>
        </div>
       <Image
          src="/images/portfoliow.svg"
          alt="Description of image"
          width={300}
          height={300}
          className='rounded-lg logo'
        />
      </section>
    </div>
  );
}
