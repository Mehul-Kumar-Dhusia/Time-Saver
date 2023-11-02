import React, { useContext } from 'react'
import SingleColumn from './SingleColumn'
import { Priority, Status } from '../Data'
import { MyContext } from '../MyContext'

const MainSection = () => {
  const {setShowDisplayBox , userData , grouping , setGrouping ,groupingValue} = useContext(MyContext)

  if(groupingValue === "Status"){
    setGrouping(Status)
  }
  if(groupingValue === "User"){
    setGrouping(userData)
  }
  if(groupingValue === "Priority"){
    setGrouping(Priority)
  }

  return (
    <div onClick={()=>{setShowDisplayBox(false)}} className='main-section'>
      {grouping.map(item => (
        <SingleColumn item = {item} />
      ))}
    </div>
  )
}

export default MainSection
