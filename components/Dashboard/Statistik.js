import DiagramPie from "./DiagramPie";

export default function Statistik() {
  return (
    <div className="w-4/12 relative bg-white rounded-[30px] px-[38px] py-[31px]">
      <div className="mb-6">
        <h4 className="text-[22px] mb-1 font-semibold ">Statistik</h4>
        <p className="text-sm text-primary/50">Video ditonton</p>
      </div>
      <div className="shadow-statistik absolute left-[50%] -translate-x-[50%] rounded-full">
        <DiagramPie />
        <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center w-[85px]">
          <h3 className="text-2xl font-bold">65%</h3>
          <p className="text-xs ">Video Ditonton</p>
        </div>
      </div>
    </div>
  );
}
