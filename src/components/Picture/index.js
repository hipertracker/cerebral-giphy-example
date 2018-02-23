import { connect } from '@cerebral/react'
import { props, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'

export default connect(
  {
    data: state`data.${props`id`}`,
    zoom: state`pictureZoom`,
  },
  class Picture extends React.PureComponent {
    static propTypes = {
      id: PropTypes.string.isRequired,
      data: PropTypes.object.isRequired,
      zoom: PropTypes.number.isRequired,
    }

    render () {
      const {
        id,
        data: {
          title,
        },
        zoom,
      } = this.props
      const url = `//media.giphy.com/media/${id}/giphy.webp 400w`
      return <img srcSet={url} sizes={`${zoom}vw`} alt={title}/>
    }
  },
)
