import React from 'react'

interface CommonComponentProps {
  message: string
}

export const CommonComponent = (props: CommonComponentProps) => {
  return <span>{props.message}</span>
}
