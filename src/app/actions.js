import _map from 'lodash/map'

// it would no be necessary for GraphQL end-point
function normalizeData (response) {
  const data = _map(response.data, item => {
    return {
      id: item.id,
      title: item.title,
      gif_url: item.images.fixed_width_small_still.gif_url,
      width: parseInt(item.images.fixed_width_small_still.width),
      height: parseInt(item.images.fixed_width_small_still.height),
    }
  })
  return {...response, data}
}

export function fetchData ({giphy, path, state}) {
  const page = state.get('pagination.page')
  const limit = state.get('fetchLimit')
  const params = {
    q: state.get('query'),
    offset: (page - 1) * limit,
    limit,
    sort: 'recent',
  }
  return giphy.search(params).
    then(response => {
      const data = normalizeData(response)
      return path.ok(data)
    }).catch(error => path.failed({error}))
}

export function updateState ({props, state}) {
  // data piped and destructured from loadData()

  const {
    data,
    pagination: {
      count,
      total_count: totalCount,
    },
  } = props

  if (!data) return

  const totalPages = Math.floor(totalCount / state.get('fetchLimit'))

  // normalize array to object for VDOM optimization
  const groupById = data.reduce(
    (acc, item) => ({...acc, [item.id]: item}),
    {},
  )

  // update UI state tree
  state.set('data', groupById)
  state.set('pagination.count', count)
  state.set('pagination.totalCount', totalCount)

  // API limit, max 100 pages
  state.set('pagination.totalPages', totalPages > 100 ? 100 : totalPages)

  // set the first page if needed
  const page = state.get('pagination.page')
  if (!page && count > 0) {
    state.set('pagination.page', 1)
  }
}


