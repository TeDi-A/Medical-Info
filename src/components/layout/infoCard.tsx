interface InfoTextProps {
  label: string;
  children: React.ReactNode;
  icon?: string;
}

const InfoCard = ({ label, children, icon }: InfoTextProps) => {
  return (
    <div className="bg-base-200 p-4 rounded-lg mb-4 shadow-sm border-l-4 border-primary h-screen">
      <h3 className="font-bold text-lg mb-2">
        {icon} {label}
      </h3>
      {children}
    </div>
  );
};

export default InfoCard;
