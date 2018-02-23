import { Container } from '@cerebral/react'
import { Snapshot } from 'cerebral/test'
import React from 'react'
import renderer from 'react-test-renderer'
import app from './app'
import Pagination from './components/Pagination'

// snapshot testing is in beta
test('homeRouted', () => {
  return Snapshot(app).
    mutate('set', 'query', 'cats').
    mutate('set', 'pagination.page', 2).
    mutate('set', 'pictureId', null).
    mockResolvedPromise('giphy.search', {
      data: [],
      meta: {msg: 'OK', response_id: '5a71c9507351665a778766a7', status: 200},
      pagination: {count: 25, offset: 25, total_count: 7576},
    }).
    run('homeRouted', {q: 'cats', page: 2, id: null}).
    then(snapshot => {
      const tree = renderer.create(
        <Container controller={snapshot.controller}>
          <Pagination/>
        </Container>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
      expect(snapshot.get()).toMatchSnapshot()
    })
})


