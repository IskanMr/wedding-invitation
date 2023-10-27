export default function Introduction() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-end p-20">
      <div className="flex flex-col items-center justify-center">
        <div className=" text-lg font-bold">dr. Kamila Muyasarah</div>
        <div className="text-xs">
          Putri kedua dari Bapak Nasih Widya Yuwono & Ibu Niken Aryati
        </div>
      </div>
      <div>&</div>
      <div className="flex flex-col items-center justify-center">
        <div className=" text-lg font-bold">Adam Adhe Nugraha S.E</div>
        <div className="text-xs">
          Putra kedua dari (Alm.) Bapak Sariman & Ibu Nanik Tri Winarsih
        </div>
      </div>
      <img src="/both.png" alt="" className=" h-3/5" />
      <img
        src="/ornamen2.png"
        alt=""
        className="absolute bottom-0 left-0 h-96 "
      />
      <img
        src="/ornamen2.png"
        alt=""
        className="absolute bottom-0 right-0 h-96  -scale-x-100 transform"
      />
      <img src="/ornamen1.png" alt="" className="absolute left-0 top-0 h-96" />
      <img
        src="/ornamen1.png"
        alt=""
        className="absolute right-0 top-0 h-96 -scale-x-100 transform"
      />
    </div>
  );
}
