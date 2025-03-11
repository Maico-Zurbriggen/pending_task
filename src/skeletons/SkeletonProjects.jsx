import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const SkeletonProjects = () => {
  return (
    <SkeletonTheme baseColor='#A8C5DA' highlightColor='#7bb4e9'>
      <Skeleton width={580} height= {106} count={3} />
    </SkeletonTheme>
  )
}