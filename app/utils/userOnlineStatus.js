"use client"
import { useEffect, useState } from 'react'

const userOnlineStatus = () => {
    const [userOnline, setUserOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () => {
            setUserOnline(false);
        })
        window.addEventListener("online",() => {
            setUserOnline(true);
        })
    }, [])

  return userOnline;
}

export default userOnlineStatus
