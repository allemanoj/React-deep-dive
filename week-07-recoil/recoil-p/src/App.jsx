import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  
  return (<RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )
}
function MainApp() {
  const newtWorkNotifications = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

       return (
    <>
     <button>Home</button>

     <button>Jobs ({jobsAtomCount})</button>
     <button>My Network ({newtWorkNotifications >= 100 ? "99+" : newtWorkNotifications})</button>
     <button>Messageing ({messagingAtomCount})</button>
     <button>Notifications ({notificationAtomCount})</button>

     <button>Me</button>
    </>
  )
}

export default App
