import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export default (props) => {
  return (
    <div>
      {/* height and width in pixels */}
      <Sparklines height={120} width={180} data={props.data}>
        {/* look at docs to see available colors */}
        <SparklinesLine color={props.color} />
       </Sparklines>
    </div>
  )
}