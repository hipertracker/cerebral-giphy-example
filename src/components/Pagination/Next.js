import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'

export default connect(
  {
    page: state`pagination.page`,
    totalPages: state`pagination.totalPages`,
    pageChanged: signal`pageChanged`,
  },
  class Next extends React.PureComponent {
    static propTypes = {
      page: PropTypes.number.isRequired,
      totalPages: PropTypes.number.isRequired,
      pageChanged: PropTypes.func.isRequired,
    }

    clicked = () => {
      const value = this.props.page + 1
      this.props.pageChanged({value})
    }

    render () {
      const {page, totalPages} = this.props
      if (page === totalPages) {
        return (
          <a className="pagination-next" disabled>
            Next
          </a>
        )
      }
      return (
        <a className="pagination-next" onClick={this.clicked}>
          Next
        </a>)
    }
  },
)
