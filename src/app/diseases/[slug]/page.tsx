import DiseaseSlides from "./DiseaseSlides";
import {
  DiseaseInfo,
} from "../../../lib/data/diseaseDetails";
import { Disease } from "../../../types/disease";

// Generate params for static paths
export async function generateStaticParams() {
  return DiseaseInfo.map((d) => ({ slug: d.slug }));
}

interface DiseasePageProps {
  params: Promise<{ slug: string }>;
}

export default async function DiseaseInfoPage({ params }: DiseasePageProps) {
  const { slug } = await params;

  const data: Disease | undefined = DiseaseInfo.find((d) => d.slug === slug);

  if (!data) return <div>Disease not found</div>;

  return <DiseaseSlides data={data} />;
}
