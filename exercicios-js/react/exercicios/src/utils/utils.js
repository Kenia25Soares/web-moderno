import React from 'react'

export function childrenWithProps(props) {
  return React.Children.map(props.children, filho => {
      return React.cloneElement(filho, {
            ...props, ...filho.props
          })
  })
}