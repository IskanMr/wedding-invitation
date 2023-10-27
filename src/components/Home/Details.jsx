export default function Details() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-4">
      <img src="house.png" alt="house" className="w-7/12" />
      <div className="flex flex-col items-center justify-center space-y-2 text-body">
        <div className=" text-title">Akad Nikah</div>
        <div className="text-center">
          Jumat, 22 Desember 2023 pukul 15.30 WIB <br />
          Masjid Gedhe Kauman, Yogyakarta
        </div>
      </div>
      <div className=" h-9 border-l-2 border-black" />
      <img src="house.png" alt="house" className=" w-40" />
      <div className="flex flex-col items-center justify-center space-y-2 text-body">
        <div className="text-title">Walimahan</div>
        <div className="text-center">
          Minggu, 24 Desember 2023 pukul 09.30 - 11.30 WIB <br />
          The Amora Wedding Venue
        </div>
        <div className="text-center text-small">
          Jl. Raya Ngemplak, Kemasan,
          <br />
          Wedomartani, Kec. Ngemplak, Kabupaten <br />
          Sleman, Daerah Istimewa Yogyakarta
        </div>
      </div>
      <img src="" alt="qr" className=" h-28 w-28 border " />
      <img
        src="/ornamen2.png"
        alt="ornamen"
        className="absolute bottom-0 left-0 h-96 "
      />
      <img
        src="/ornamen2.png"
        alt="ornamen"
        className="absolute bottom-0 right-0 h-96  -scale-x-100 transform"
      />
      <img
        src="/ornamen1.png"
        alt="ornamen"
        className="absolute left-0 top-0 h-96"
      />
      <img
        src="/ornamen1.png"
        alt="ornamen"
        className="absolute right-0 top-0 h-96 -scale-x-100 transform"
      />
    </div>
  );
}
