import EbiraMap from './map/ebiramap';

export default function About() {
  return (
    <section id='about' className='py-32 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-20 items-center'>
          {/* LEFT */}

          <div>
            <p className='uppercase  text-3xl tracking-[0.3em] text-[#2E3192] font-bold'>
              ABOUT US
            </p>

            <h2 className='text-5xl font-bold mt-4 leading-tight'>
              Empowering Communities,
              <br />
              Building Futures
            </h2>

            <p className='mt-8 text-gray-600 leading-8'>
              DE-FRIENDS CLUB is a non-partisan, non-religious, non-governmental
              organization committed to promoting education, healthcare,
              empowerment, and sustainable community development across Ebira
              Land.
            </p>
          </div>

          {/* RIGHT */}

          <div>
            <p className='uppercase tracking-[0.3em] text-[#2E3192] font-semibold text-center'>
              OUR REACH
            </p>

            <h3 className='text-4xl font-bold text-center mt-4'>
              Serving Communities
              <br />
              Across Ebira Land
            </h3>

            <div className='mt-10'>
              <EbiraMap />
            </div>

            <p className='text-center text-gray-500 mt-8 leading-7'>
              Supporting education, healthcare, empowerment and community
              development across Ebira Land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
