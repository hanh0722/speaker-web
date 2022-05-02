export const getLoadingPercent = (event: ProgressEvent) => {
  const { loaded, total } = event;
  return Math.round((loaded / total) * 100);
}