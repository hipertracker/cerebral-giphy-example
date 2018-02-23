import Router from '@cerebral/router/lib/index'
import syncStatewithUrl from './lib/syncStateWithUrl'

export default Router({
  routes: [
    {
      path: '/',
      signal: 'homeRouted',
      ...syncStatewithUrl([
        {urlKey: 'q', statePath: 'query'},
        {urlKey: 'page', statePath: 'pagination.page'},
        {urlKey: 'id', statePath: 'pictureId'},
      ]),
    },
  ],
  onlyHash: true, // use false for HTML5 Push State
})
