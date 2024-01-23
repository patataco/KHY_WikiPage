import { useIsMounted } from '@toss/react';
import { Suspense, type SuspenseProps, useEffect } from 'react';

let isMountedBefore = false;

export function SSRSafeSuspense(props: SuspenseProps) {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      isMountedBefore = true;
    }
  }, [isMounted]);

  if (isMounted || isMountedBefore) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
