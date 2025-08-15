'use client'

import { useEffect, useRef } from 'react'

interface HLSVideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export function HLSVideoPlayer({ src, poster, className }: HLSVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Check if HLS is natively supported
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
    } else {
      // Use HLS.js for browsers that don't support HLS natively
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls()
          hls.loadSource(src)
          hls.attachMedia(video)
          
          return () => {
            hls.destroy()
          }
        }
      }).catch(() => {
        // Fallback: try to load the video directly
        video.src = src
      })
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={className}
      controls
      preload="metadata"
      poster={poster}
    >
      Your browser does not support the video tag or HLS streaming.
    </video>
  )
}
