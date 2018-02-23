import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'

export default connect(
  {
    page: state`pagination.page`,
    pageChanged: signal`pageChanged`,
  },
  class Prev extends React.PureComponent {
    static propTypes = {
      page: PropTypes.number.isRequired,
      pageChanged: PropTypes.func.isRequired,
    }

    clicked = () => {
      const value = this.props.page - 1
      this.props.pageChanged({value})
    }

    render () {
      if (this.props.page === 1) {
        return (
          <a className="pagination-previous" disabled>
            Previous
          </a>
        )
      }

      return (
        <a className="pagination-previous" onClick={this.clicked}>
          Previous
        </a>)
    }
  },
)
