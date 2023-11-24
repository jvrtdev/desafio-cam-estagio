import React from 'react'

export default function ButtonAction({action, children }) {
  return (
    <button onClick={action} className="text-2xl">
        {children}
    </button>
  )
}
