import Item from "./Item";
import ItemMenu from "./ItemMenu";
import Title from "./Title";

export default function MenuLearningRoom() {
  return (
    <div className="mt-14 px-[38px]">
      <Title>Statistik</Title>
      <div className=" mb-[74px]">
        <p className="text-sm text-right opacity-90">20%</p>
        <div className="relative w-full h-2 mt-1 mb-1 rounded-full bg-secondary">
          <div className="absolute w-[20%] h-2 rounded-full bg-black/70"></div>
        </div>
        <p className="text-[10px] opacity-70">4 dari 20 video telah selesai </p>
      </div>
      <Item title="Intro">
        <ItemMenu>Perkenalan Instruktur</ItemMenu>
      </Item>
      <Item title="Instalasi">
        <ItemMenu>Download Tools</ItemMenu>
        <ItemMenu def>Instalasi Tools</ItemMenu>
        <ItemMenu>Basic Penggunaan Tools</ItemMenu>
      </Item>
      <Item title="Dasar HTML">
        <ItemMenu>Tentang HTML</ItemMenu>
        <ItemMenu>Menjalankan Kode</ItemMenu>
        <ItemMenu>Tag</ItemMenu>
        <ItemMenu>Header dan Paragraf</ItemMenu>
        <ItemMenu>List</ItemMenu>
        <ItemMenu>Table</ItemMenu>
      </Item>
    </div>
  );
}
