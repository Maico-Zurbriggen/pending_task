import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

console.log("SKELETON");

export const SkeletonPrincipal = () => {
  return (
    <SkeletonTheme baseColor='#A8C5DA' highlightColor='#7bb4e9'>
      <section>
        <Skeleton width={580} height={206} />
      </section>
      <Skeleton width={580} height= {106} count={3} />
    </SkeletonTheme>
  )
}