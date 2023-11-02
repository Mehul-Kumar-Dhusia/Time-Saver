import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { Add, MoreHoriz, SignalCellularAlt } from '@mui/icons-material'
import { MyContext } from '../MyContext';

const SingleColumn = ({item}) => {
  const [mainData , setMainData] = useState([]) ;
  const [sortedData , setSortedData] = useState([]) ;
  const {groupingValue , ticketData , orderingValue} = useContext(MyContext) ;
  useEffect(() => {
    if(groupingValue === "Status"){
      const arr = ticketData.filter((temp) => {
        return temp.status === item.name ;
      })
      setMainData(arr) ;
    }
    if(groupingValue === "User"){
      const arr = ticketData.filter((temp) => {
        return temp.userId === item.id ;
      })
      setMainData(arr) ;
    }
    if(groupingValue === "Priority"){
      const arr = ticketData.filter((temp) => {
        return temp.priority === item.val ;
      })
      setMainData(arr) ;
    }

    if(orderingValue === "Priority"){
      const temp = mainData.sort((a , b) => {
        return b.priority-a.priority ;
      })
      setSortedData(temp)
    }
    if(orderingValue === "Title"){
      const temp = mainData.sort((a , b) => {
        return a.id-b.id;
        // return a.title[0]-b.title[0] ;
      })
      setSortedData(temp)
    }
    
  } , [mainData])
  return (
    <div className='single-column'>
      <div className='single-column-top'>
        <div className='single-column-top-left'>
          {(groupingValue === "Status" || groupingValue === "Priority" )&& <div className='single-column-color' style={{backgroundColor : item.color}}></div>}
          {/* <SignalCellularAlt fontSize='16px' /> */}
          <span style={{color:"gray" , marginRight:"20px" , fontWeight:"bold"}}>{item.name}</span>
          <span className='top-left-number'>{mainData.length}</span>
        </div>
        <div className='single-column-top-right'>
         <Add fontSize='16px' />
         <MoreHoriz fontSize='16px' />
        </div>
      </div>
      <div className='single-column-bottom'>
        {sortedData.map((item) => (
          <Card item = {item} />
        ))}
      </div>
    </div>
  )
}

export default SingleColumn
