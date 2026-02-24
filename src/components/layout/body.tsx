import Card from "../ui/card";
import { DiseaseInfo } from "../../lib/data/diseaseDetails";

const PageContent = () => {
  return (
    <>
      <div className="p-4 ">
        <h2 className="text-center mb-6">
          Learn about common medical conditions
        </h2>
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center sm:flex-nowrap">
          {DiseaseInfo.map((disease: any, index) => (
            <Card
              key={disease.slug}
              cardTitle={disease.title}
              cardDetails={`Chronic disease ${index + 1}`}
              cardImage={disease.cover}
              slug={disease.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PageContent;
