export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 p-8">
      <img src="/Title_Green.png" className="w-36" alt="" />
      <img src="/circlePeople.png" className="w-40" alt="" />
      <div className="flex flex-col space-y-3 py-4 text-lg font-bold">
        <span>22</span>
        <span>12</span>
        <span>23</span>
      </div>
      <div className=" h-40 border-l-2 border-green" />
    </div>
  );
}
