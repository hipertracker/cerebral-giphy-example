import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import PropTypes from 'prop-types'
import React from 'react'

export default connect(
  {
    error: state`errors`,
    clicked: signal`errorMessageClosed`,
  },
  class ErrorNotification extends React.PureComponent {
    static propTypes = {
      error: PropTypes.any,
      messageClosed: PropTypes.func,
    }

    clicked = () => {
      this.props.clicked()
    }

    render () {
      const {error} = this.props
      if (!error) return null
      return (
        <div className="notification is-danger">
          <button className="delete" onClick={this.clicked}/>
          {error}
        </div>
      )
    }
  },
)
