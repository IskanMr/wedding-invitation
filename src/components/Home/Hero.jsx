export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-start space-y-16 p-20">
      <img src="/Title_Green.png" width="256" alt="" />
      <img src="/circlePeople.png" alt="" />
      <div className="flex flex-col space-y-4 text-lg font-bold">
        <span>22</span>
        <span>12</span>
        <span>23</span>
      </div>
      <div className=" h-full border-l-2 border-green" />
    </div>
  );
}
