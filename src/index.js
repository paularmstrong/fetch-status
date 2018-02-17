export const FetchStatus = Object.freeze({
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
  NONE: 'none'
});

export type FetchStatusEnum = $Values<typeof FetchStatus>;

type Item = { fetchStatus: FetchStatusEnum };

export const resolveInitialFetchStatus = (...statuses: Array<FetchStatusEnum>): FetchStatusEnum => {
  if (statuses.some(status => status === FetchStatus.LOADED)) {
    return FetchStatus.LOADED;
  }
  if (statuses.some(status => status === FetchStatus.LOADING)) {
    return FetchStatus.LOADING;
  }
  if (statuses.some(status => status === FetchStatus.FAILED)) {
    return FetchStatus.FAILED;
  }
  return FetchStatus.NONE;
};

export const resolveFetchStatus = (...statuses: Array<FetchStatusEnum>): FetchStatusEnum => {
  if (statuses.some(status => status === FetchStatus.FAILED)) {
    return FetchStatus.FAILED;
  }
  if (statuses.some(status => status === FetchStatus.LOADING)) {
    return FetchStatus.LOADING;
  }
  if (statuses.every(status => status === FetchStatus.LOADED)) {
    return FetchStatus.LOADED;
  }
  return FetchStatus.NONE;
};

export default FetchStatus;
