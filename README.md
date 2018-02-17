# FetchStatus [![build status](https://img.shields.io/travis/paularmstrong/fetch-status/master.svg?style=flat-square)](https://travis-ci.org/paularmstrong/fetch-status) [![npm version](https://img.shields.io/npm/v/fetch-status.svg?style=flat-square)](https://www.npmjs.com/package/fetch-status) [![npm downloads](https://img.shields.io/npm/dm/fetch-status.svg?style=flat-square)](https://www.npmjs.com/package/fetch-status)

Provides a standard enum for `FetchStatus` and methods for resolving the status from multiple statuses.

## API

### `FetchStatus`

Keys:

* `FetchStatus.NONE`
* `FetchStatus.LOADING`
* `FetchStatus.LOADED`
* `FetchStatus.FAILED`

### `resolveInitialFetchStatus(...statuses: Array<FetchStatusEnum>): FetchStatusEnum`

Resolve a single status from multiple statuses for an initial case. Gives priority to `FetchStatus.LOADED` and `FetchStatus.LOADING`.

### `resolveFetchStatus(...statuses: Array<FetchStatusEnum>): FetchStatusEnum`

Resolve a single status from multiple statuses for a generic case. Gives priority to `FetchStatus.FAILED` and `FetchStatus.LOADED`.
