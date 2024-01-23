interface ServiceTitleProps {
  title: string;
}
const ServiceTitle = ({ title }: ServiceTitleProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
};

export default ServiceTitle;
