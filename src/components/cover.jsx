import { useSearchParams } from "react-router-dom";

export default function Cover() {
  const [searchParams] = useSearchParams();
  const nama = searchParams.get("nama");
  return (
    <div className="relative flex min-h-screen w-full items-end justify-start bg-blue p-8">
      <img
        className="absolute right-0 top-0 pr-8 pt-8"
        src="/badge.png"
        alt="badge"
      />
      <div className=" flex w-4/6 flex-col space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <img
            src="/Title_Green.png"
            alt=""
            className="w-40"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className=" text-sm text-white">24 Desember 2023</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span className=" text-xs text-white">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </span>
          <div className=" flex h-28 w-full flex-col items-center justify-end rounded-3xl bg-white px-6 py-2">
            <span className="flex h-full items-center justify-center font-bold">
              {nama}
            </span>
            <span className="text-center text-[9px] font-light leading-tight">
              Mohon maaf apabila terdapat kesalahan dalam penulisan nama atau
              gelar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
