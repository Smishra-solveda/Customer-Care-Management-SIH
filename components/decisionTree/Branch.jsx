import React from 'react'
import Heading from './Heading'

export default function Branch({searchTerm,parent, childrens, relationTree, personData}) {
  return (
    <ul>
        {childrens.map(x => {
            return <Heading searchTerm={searchTerm} key={x} id={x} relationTree={relationTree} personData={personData}/>
        })}
    </ul>
  )
}
