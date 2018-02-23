import { Provider } from 'cerebral'
import GiphyApiClient from 'giphy-js-sdk-core'

const apiKey = process.env.REACT_APP_GIPHY_API
const client = GiphyApiClient(apiKey)

export const Giphy = Provider({
  search (...params) {
    return client.search('gifs',...params)
  },
})



