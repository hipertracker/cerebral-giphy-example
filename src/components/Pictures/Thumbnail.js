import { connect } from '@cerebral/react'
import { props, signal, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'
import { style } from 'typestyle'

export default connect(
  {
    data: state`data.${props`id`}`,
    clicked: signal`pictureClicked`,
  },
  class Thumbnail extends React.PureComponent {
    static propTypes = {
      id: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
      clicked: PropTypes.func.isRequired,
    }

    clicked = () => {
      const value = this.props.id
      this.props.clicked({value})
    }

    render () {
      const {id, data} = this.props

      if (!data) return null

      const css = style({
        border: '4px solid red',
        padding: 0,
        margin: 10,
        transition: '.3s transform',
        $nest: {
          '&:hover': {
            transform: 'scale(3,3)',
            border: '1px solid darkgray',
            cursor: 'pointer',
          },
        },
      })

      const shelfCss = style({
        backgroundColor: 'lightgoldenrodyellow',
      })
      return (
        <span className={shelfCss} onClick={this.clicked}>
      <img
        className={css}
        key={id}
        src={data.gif_url}
        width={data.width}
        height={data.height}
        alt={data.title}
      />
    </span>
      )
    }
  },
)
