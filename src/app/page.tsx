export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
        <div className="flex flex-1 flex-col justify-start">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Langkah kecil manfaat besar
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-6xl mt-4">
            Sampah 
            <div className="text-6xl font-bold bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 bg-clip-text text-transparent py-2" style={{ fontStyle: 'oblique', fontVariationSettings: '"slnt" 4' }}>
                Anorganik?
            </div>
            Cofika Solusinya!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-md mt-12">
            Tukar, kelola, dan manfaatkan sampahmu dengan mudah melalui Cofika.
            Yuk, mulai aksi nyatamu hari ini!
          </h5>
        </div>
        <div className="flex flex-1 justify-center">
          <h1 className="bg-eb-primary-gray-600 text-eb-primary-gray-700">
            Halo, Cindyyyy!
          </h1>
        </div>
      </div>
    </main>
  );
}
