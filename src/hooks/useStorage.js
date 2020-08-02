import { useState, useEffect } from 'react'
import { programStorage, programFireStore, timestamp } from '../firebase/config'

const useStorage = file => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // reference
    const storageRef = programStorage.ref(file.name)
    const collectionRef = programFireStore.collection('images')
    storageRef.put(file).on('state_changed', snap => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }, err => setError(err), async () => {
      const url = await storageRef.getDownloadURL()
      collectionRef.add({ url, createdAt: timestamp() })
      setUrl(url)
    })
  }, [file])

  return {
    progress,
    error,
    url
  }
}

export default useStorage