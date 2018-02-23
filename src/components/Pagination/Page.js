import { connect } from '@cerebral/react'
import { signal } from 'cerebral/tags'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default connect(
  {
    pageChanged: signal`pageChanged`,
  },
  class Page extends React.PureComponent {
    static propTypes = {
      pageChanged: PropTypes.func.isRequired,
    }

    clicked = () => {
      this.props.pageChanged({value: this.props.value})
    }

    render () {
      const {value, current} = this.props
      const css = classNames('pagination-link', {
        'is-current': value === current,
      })
      return (
        <li>
          <a className={css} aria-label={`Goto page ${value}`}
             onClick={this.clicked}>
            {value}
          </a>
        </li>
      )
    }
  },
)


