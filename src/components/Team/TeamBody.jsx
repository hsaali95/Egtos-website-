import React from 'react'
import ChildGrid from './ChildGrid'
import Heading from './Heading'

const TeamBody = ({Teams}) => {
  return (
    <>
        {/* <Heading/> */}
        <ChildGrid Teams={Teams}/>
    </>
  )
}

export default TeamBody