import { FetchStatus, resolveInitialFetchStatus, resolveFetchStatus } from '../';

describe('FetchStatus', () => {
  describe('resolveInitialFetchStatus', () => {
    test('returns LOADED if any value is LOADED', () => {
      expect(resolveInitialFetchStatus(FetchStatus.LOADING, FetchStatus.FAILED, FetchStatus.LOADED)).toBe(
        FetchStatus.LOADED
      );
    });

    test('returns LOADING if any value is LOADING', () => {
      expect(resolveInitialFetchStatus(FetchStatus.NONE, FetchStatus.FAILED, FetchStatus.LOADING)).toBe(
        FetchStatus.LOADING
      );
    });

    test('returns FAILED if any value is FAILED', () => {
      expect(resolveInitialFetchStatus(FetchStatus.NONE, FetchStatus.FAILED, FetchStatus.NONE)).toBe(
        FetchStatus.FAILED
      );
    });

    test('returns NONE if all are NONE', () => {
      expect(resolveInitialFetchStatus(FetchStatus.NONE)).toBe(FetchStatus.NONE);
    });
  });

  describe('resolveFetchStatus', () => {
    test('returns FAILED if any value is FAILED', () => {
      expect(resolveFetchStatus(FetchStatus.LOADED, FetchStatus.FAILED, FetchStatus.LOADING)).toBe(FetchStatus.FAILED);
    });

    test('returns LOADING if any value is LOADING but not FAILED', () => {
      expect(resolveFetchStatus(FetchStatus.LOADED, FetchStatus.NONE, FetchStatus.LOADING)).toBe(FetchStatus.LOADING);
    });

    test('returns LOADED if all values are LOADED', () => {
      expect(resolveFetchStatus(FetchStatus.LOADED, FetchStatus.LOADED, FetchStatus.LOADED)).toBe(FetchStatus.LOADED);
    });

    test('returns NONE if all values are NONE', () => {
      expect(resolveFetchStatus(FetchStatus.NONE, FetchStatus.NONE)).toBe(FetchStatus.NONE);
    });
  });
});
