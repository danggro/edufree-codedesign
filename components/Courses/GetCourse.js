import Button from "../Button";
import Container from "../Container";

export default function GetCourse() {
  return (
    <Container>
      <div className="w-8/12 mx-auto text-center mt-[200px]">
        <h1 className="font-semibold text-[42px] px-10">
          Jangan Lewatkan Kesempatan Mari Ciptakan Sesuatu!
        </h1>
        <p className="mt-[10px] mb-[76px] text-base font-medium opacity-70">
          Yu akses kelas gratisnya, dengan cara klik button dibawah ini
        </p>
        <div className="w-4/12 mx-auto">
          <Button variant={`yellow-tracking`}>IKUTI KURSUS</Button>
        </div>
      </div>
    </Container>
  );
}
