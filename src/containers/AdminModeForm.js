import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { AdminModeForm } from 'components'
import { enterAdminModeAction } from 'store/actions'

const AdminModeFormContainer = props => <AdminModeForm { ...props } />

const mapDispatchToProps = dispatch => ({
  onSubmit: (passcode) => {
    dispatch(enterAdminModeAction({ passcode }))
    dispatch(push('/'))
  },
})

export default connect(null, mapDispatchToProps)(AdminModeFormContainer)
