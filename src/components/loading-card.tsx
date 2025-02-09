import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LoadingCardSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <Card key={index}>
          <Skeleton className="h-48 rounded-xl" />
          <CardHeader>
            <CardTitle>
              <Skeleton className="mt-5 h-4 w-[250px] rounded-lg" />
            </CardTitle>
            <CardDescription className="flex flex-col flex-wrap gap-2">
              <Skeleton className="mt-3 h-4 w-11/12 rounded-lg" />
              <Skeleton className="h-4 w-[200px] rounded-lg" />
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </>
  );
}
