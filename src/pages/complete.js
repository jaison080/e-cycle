import { Router } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import CustomTitle from '../utils/customTitle'

function Complete() {
  const router=useRouter();
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
    }}
    data-aos="zoom-in">
        <h1>Your Product has been successfully registered !!</h1>
        <h1>A Technician will Contact You Soon to book slot for checking the product...</h1>
        <br/>
        <Button variant="contained" onClick={()=>{
          router.push('/userDashboard')
        }}>Go to Home</Button>
    </div>
    </>
  )
}

export default Complete