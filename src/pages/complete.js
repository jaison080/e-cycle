import React from 'react'
import CustomTitle from '../utils/customTitle'

function Complete() {
  return (
    <>
    <CustomTitle title="Complete" />
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        rowGap: '1rem',
        alignItems: 'center',
        height: '90vh'
    }}>
        <h1>Your Product has been successfully registered !!</h1>
        <h1>A Technician will Contact You Soon...</h1>
    </div>
    </>
  )
}

export default Complete