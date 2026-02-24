"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Disease } from "../../../types/disease";

type DiseaseSlideProps = {
  data: Disease;
};

export default function DiseaseSlides({ data }: DiseaseSlideProps) {
  const { scrollYProgress } = useScroll();

  const images = data.images;
  console.log(data.references);

  //reference slug folder

  const getSlideMotionValues = (
    index: number,
    scrollYProgress: MotionValue<number>,
  ) => {
    const start = index / images.length;
    const end = (index + 1) / images.length;

    const opacity = useTransform(
      scrollYProgress,
      [start, start + 0.1, end - 0.1, end],
      [0, 1, 1, 0],
    );

    const translateImgY = useTransform(
      scrollYProgress,
      [start, start + 0.1, end - 0.1, end],
      [7.5, 0, 0, -7.5],
    );
    return { opacity, translateImgY };
  };

  const getTranslateSlideY = (
    index: number,
    scrollYProgress: MotionValue<number>,
  ) => {
    const start = index / images.length;
    const end = (index + 1) / images.length;

    return useTransform(
      scrollYProgress,
      [start, start + 0.1, end - 0.1, end],
      [100, 0, 0, -100],
    );
  };

  const sectionHeight = images.length * 150 + 100;
  return (
    <div className="pt-20 px-0 ">
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {data.title}
      </h2>

      <div
        className="container-element w-screen"
        style={{ height: `${sectionHeight}vh` }}
      >
        <div className="h-screen w-full sticky top-0 flex">
          {images.map((src, index) => {
            const { opacity, translateImgY } = getSlideMotionValues(
              index,
              scrollYProgress,
            );

            const translateSlideY = getTranslateSlideY(index, scrollYProgress);
            const sections = data.sections;

            return (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  opacity,
                  y: translateImgY,
                }}
              >
                <img
                  src={src}
                  alt={`img${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80" />

                <motion.div
                  className="disease-content w-full h-full absolute top-0 left-0 flex items-center justify-center p-8 text-center"
                  style={{ y: translateSlideY }}
                >
                  {Array.isArray(sections[index]?.content) ? (
                    <ul className="list-disc pl-5">
                      {sections[index].content.map(
                        (item: string, i: number) => (
                          <ul>
                            <li
                              className="text-4xl font-bold leading-normal"
                              key={i}
                            >
                              <p>{item}</p>
                            </li>
                          </ul>
                        ),
                      )}
                    </ul>
                  ) : (
                    <p className="text-4xl font-bold">
                      {sections[index]?.content}
                    </p>
                  )}
                </motion.div>

                <div className="absolute bottom-0 right-0 p-10 text-right">
                  <p className="text-5xl font-bold uppercase">
                    {sections[index]?.type}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="disease-references h-screen p-10 text-center flex flex-col align-center justify-center ">
        {data.references && (
          <div className="references-list">
            <h2>References</h2>
            <ul>
              {data.references.map((ref, i) => (
                <li key={i}>{ref}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
