import Image from "next/image";
import { useState } from "react";
import Container from "../../Container";

const review = [
  {
    id: "1",
    text: '"Materi 1 yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
  },
  {
    id: "2",
    text: '"Materi 2 yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
  },
  {
    id: "3",
    text: '"Materi 3 yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
  },
  {
    id: "4",
    text: '"Materi 4 yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
  },
  {
    id: "5",
    text: '"Materi 5 yang disampaikan mudah dimengerti, kualitas instruktur sangat baik serta responnya yang cepat. So, kursus disini sangat sangat saya rekomendasikan!!"',
  },
];

export default function SectionReview() {
  const [text, setText] = useState(2);
  const gantiText = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    setText(num);
  };
  return (
    <section id="review" className="w-screen py-20 bg-secondary-blue">
      <Container>
        <div className="flex">
          <div className="w-4/12">
            <h4 className="text-[28px] font-semibold pr-10">
              Kata Mereka Tentang Kursus EDUFREE
            </h4>
            <p className="text-base pr-28 opacity-70">
              EDUFREE telah dipercaya lebih dari 10.000 siswa
            </p>
          </div>
          <div className="w-8/12 pl-10">
            {review.map((r) => {
              if (r.id == text) {
                return (
                  <h3
                    key={r.id}
                    className="font-medium text-[26px] text-justify "
                  >
                    {r.text}
                  </h3>
                );
              }
            })}

            <div className="flex justify-between mt-10">
              <div className="flex items-center space-x-[14px]">
                <Image
                  width={`52`}
                  height="52"
                  src="/avatar-reviewer.jpg"
                  alt=""
                  className="rounded-full"
                />
                <div>
                  <div className="text-lg font-medium">Jenny Wilson</div>
                  <div className="text-xs font-medium">Vice President</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {review.map((r) => {
                  return (
                    <span
                      key={r.id}
                      data-key={r.id}
                      className={`w-4 h-4 rounded-full cursor-pointer bg-royal-blue  ${
                        r.id == text ? "opacity-100" : "opacity-40"
                      }`}
                      onClick={gantiText}
                    ></span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
