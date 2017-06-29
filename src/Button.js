import React from 'react';

const style = {
  border: '2px solid #f00',
}

export default props => (
  <button style={style} {...props} />
)
