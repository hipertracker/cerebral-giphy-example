import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'
import Next from './Next'
import Page from './Page'
import Prev from './Prev'

export default connect(
  {
    page: state`pagination.page`,
    totalPages: state`pagination.totalPages`,
    pageChanged: signal`pageChanged`,
  },
  class Pagination extends React.PureComponent {
    static propTypes = {
      page: PropTypes.number.isRequired,
      totalPages: PropTypes.number.isRequired,
    }

    render () {
      const {page, totalPages} = this.props

      if (!totalPages) return null

      let nr = [page - 1, page, page + 1]
      if (page === totalPages) {
        nr = [page - 3, page - 2, page - 1]
      } else if (page < 3) {
        nr = [2, 3, 4]
      } else if (page === totalPages - 1) {
        nr = [page - 2, page - 1, page]
      }
      return (
        <nav className="pagination is-centered" aria-label="pagination">
          <Prev/>
          <Next/>
          <ul className="pagination-list">
            <Page value={1} current={page}/>
            <li><span className="pagination-ellipsis">&hellip;</span></li>
            <Page value={nr[0]} current={page}/>
            <Page value={nr[1]} current={page}/>
            <Page value={nr[2]} current={page}/>
            <li><span className="pagination-ellipsis">&hellip;</span></li>
            <Page value={totalPages} current={page}/>
          </ul>
        </nav>
      )
    }
  },
)
