import * as providers  from './providers'
import * as sequences from './sequences'

import HttpProvider, { HttpProviderError } from '@cerebral/http'

import { Module } from 'cerebral'
import { redirectToSignal } from '@cerebral/router/operators'
import router from './router'

export default Module({
  state: {
    fetchLimit: 25,
    query: 'cats',
    data: null,
    pagination: {
      page: 1,
      totalCount: 0,
      totalPages: 0,
    },
    pictureId: null,
    pictureZoom: 40,
    errors: null,
  },
  signals: {
    homeRouted: sequences.routeToHome,
    networkFailed: sequences.recoverNetworkFailure,
    queryChanged: sequences.queryChanged,
    pageChanged: sequences.pageChanged,
    pictureClicked: sequences.toggleBigPicture,
    modalClosed: sequences.closeModal,
    errorMessageClosed: sequences.clearErrors,
  },
  modules: {
    router,
  },
  providers: {
    // see: https://cerebraljs.com/docs/introduction/debugger.html
    http: HttpProvider({
      baseUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000' : '',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
      },
      withCredentials: false,
    }),
    giphy: providers.Giphy,
  },
  catch: [
    [HttpProviderError, redirectToSignal('networkFailed')],
  ],
})
