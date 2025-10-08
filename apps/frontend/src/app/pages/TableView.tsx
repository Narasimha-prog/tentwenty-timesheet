import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function TableView() {
  return (
    <div className='bg-slate-200'>
      <Navbar/>
        <div className='font-inter w-full min-h-screen flex items-center justify-center text-3xl font-bold'>
            <h1 className='heading'>Heading</h1>
            <div className='filter flex items-center'>

            </div>
            <table>

            </table>
            <div className='pagination'></div>
       </div>
      <Footer/>
    </div>
  )
}

export default TableView