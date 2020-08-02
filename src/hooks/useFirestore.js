import { useState, useEffect } from 'react'
import { programFireStore } from '../firebase/config'

const useFirestore = collection => {
  const [docs, setDocs] = useState([])
  useEffect(() => {
    const unSubscribe = programFireStore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = []
        snap.forEach(doc => documents.push({ ...doc.data(), id: doc.id }))
        setDocs(documents)
      })
    // clean up function
    return () => unSubscribe()
  }, [collection])

  return { docs }
}

export default useFirestore