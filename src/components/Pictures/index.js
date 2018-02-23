import { connect } from '@cerebral/react'
import { state } from 'cerebral/tags'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { style } from 'typestyle'
import Thumbnail from './Thumbnail'

export default connect(
  {
    data: state`data`,
  },
  class Pictures extends React.PureComponent {
    static propTypes = {
      data: PropTypes.object,
    }

    render () {
      const {data} = this.props
      if (!data) return null

      const images = Object.keys(data).map(id => <Thumbnail key={id} id={id}/>)

      const css = classNames('section', {
        [style({
          marginTop: 10,
          backgroundColor: '#529074',
        })]: true,
      })

      return <div className={css}>{images}</div>
    }
  },
)


