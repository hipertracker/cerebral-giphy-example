// see: https://cerebraljs.com/docs/introduction/signals.html

import { set, when } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'
import * as actions from './actions'

const loadData = [
  actions.fetchData, //async
  {
    ok: actions.updateState,
    failed: set(state`errors`, props`error`),
  },
]

export const routeToHome = loadData

export const recoverNetworkFailure = set(state`errors`, props`response`)

export const queryChanged = [
  set(state`pagination.page`, 1),
  set(state`query`, props`value`),
  ...loadData,
]

export const pageChanged = [
  set(state`pagination.page`, props`value`),
  ...loadData,
]

export const toggleBigPicture = [
  set(state`pictureId`, props`value`),
  when(state`data`, data => !!data), {
    true: [],
    false: loadData,
  },
]

export const closeModal = set(state`pictureId`, null)

export const clearErrors = set(state`errors`, null)
