import { Skeleton } from '~/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="flex min-h-[728px] w-[400px] flex-col items-center gap-8 rounded-md border md:w-[640px]">
      <Skeleton className="size-full flex-1 bg-white" />
    </div>
  );
};
export default Loading;
