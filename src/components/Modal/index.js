import { connect } from '@cerebral/react'
import { signal, state } from 'cerebral/tags'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Picture from '../Picture'

export default connect(
  {
    id: state`pictureId`,
    data: state`data.${state`pictureId`}`,
    closed: signal`modalClosed`,
  },
  class Modal extends React.PureComponent {
    static propTypes = {
      id: PropTypes.string,
      closed: PropTypes.func.isRequired,
    }

    closed = () => {
      this.props.closed()
    }

    render () {
      const {id, data} = this.props

      if (!data) return null

      const {title} = data
      const css = classNames('modal', {
        'is-active': !!id,
      })

      return (
        <div className={css}>
          <div className="modal-background" onClick={this.closed}/>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button className="delete" aria-label="close"
                      onClick={this.closed}></button>
            </header>
            <section className="modal-card-body">
              <Picture id={id}/>
            </section>

          </div>
        </div>
      )
    }
  },
)

