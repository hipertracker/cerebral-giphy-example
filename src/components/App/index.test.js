import { shallow } from 'enzyme'
import React from 'react'
import ErrorNotification from '../ErrorNotification'
import Modal from '../Modal'
import Pagination from '../Pagination'
import Pictures from '../Pictures'
import Tabs from '../Tabs'
import App from './index'

it('should contain components', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.contains(<Tabs/>)).toEqual(true)
  expect(wrapper.contains(<ErrorNotification/>)).toEqual(true)
  expect(wrapper.contains(<Pagination/>)).toEqual(true)
  expect(wrapper.contains(<Pictures/>)).toEqual(true)
  expect(wrapper.contains(<Modal/>)).toEqual(true)
})
