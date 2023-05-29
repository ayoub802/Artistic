import React from 'react'

const NotificationBar = ({ bg, text}) => {
  return (
    <div className={`w-full py-2 ${bg}`}>
       <div className="flex items-center justify-center">
          <h2 className={`font-space_gortesk text-text6 leading-6 font-medium ${text}`}>70% off storewide — Limited time </h2>
       </div>
    </div>
  )
}

export default NotificationBar
