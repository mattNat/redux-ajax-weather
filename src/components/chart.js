import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  // console.log('props is:', props);
  
  return (
    <div>
      {/* height and width in pixels */}
      <Sparklines height={120} width={180} data={props.data}>
        {/* look at docs to see available colors */}
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}