import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import classNames from 'classnames'
import React from 'react'
import { style } from 'typestyle'

export default connect(
  {
    query: state`query`,
    queryChanged: signal`queryChanged`,
  },
  class Tab extends React.PureComponent {
    clicked = () => {
      const value = this.props.term.toLowerCase()
      this.props.queryChanged({value})
    }

    render () {
      const {term, query} = this.props

      const css = classNames({
        'is-active': query === term.toLowerCase(),
      })
      const termCss = style({
        fontFamily: 'Rammetto One',
        fontSize: 30,
      })

      return (
        <li className={css}>
          <a onClick={this.clicked}>
            <span className={termCss}>{term}</span>
          </a>
        </li>
      )
    }
  },
)

