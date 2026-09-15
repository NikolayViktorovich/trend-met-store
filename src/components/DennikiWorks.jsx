import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  Volume2,
  VolumeX
} from 'lucide-react'

import work1 from '../assets/denniki/video/IMG_5199.MP4?url'
import work2 from '../assets/denniki/video/20260625_C0723.MP4?url'
import work3 from '../assets/denniki/video/20260625_C0725.MP4?url'
import work4 from '../assets/denniki/video/20260625_C0736.MP4?url'
import work5 from '../assets/denniki/video/20260625_C0740.MP4?url'
import work6 from '../assets/denniki/video/20260625_C0742.MP4?url'

const works = [work1, work2, work3, work4, work5, work6]

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${String(secs).padStart(2, '0')}`
}

const isFullscreenNode = (node) => {
  const active = document.fullscreenElement || document.webkitFullscreenElement
  return Boolean(active && (active === node || node?.contains(active) || active.contains?.(node)))
}

const roundBtn =
  'flex items-center justify-center rounded-full transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
const playBtn = `${roundBtn} w-10 h-10 bg-white text-gray-900 hover:bg-gray-100`
const iconBtn = `${roundBtn} w-9 h-9 bg-white/15 text-white hover:bg-white/25`
const navBtn = `${roundBtn} w-10 h-10 bg-white text-gray-900 hover:bg-gray-100`

const DennikiWorks = ({ inactive = false }) => {
  const videoRef = useRef(null)
  const preloadRef = useRef(null)
  const frameRef = useRef(null)
  const progressRef = useRef(null)
  const timeRef = useRef(null)
  const waitingTimer = useRef(null)
  const failCount = useRef(0)
  const wantsPlay = useRef(false)
  const inViewRef = useRef(true)
  const mutedRef = useRef(false)
  const loadedSrcRef = useRef('')
  const inactiveRef = useRef(inactive)
  const fullscreenRef = useRef(false)

  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [userMuted, setUserMuted] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [durationLabel, setDurationLabel] = useState('0:00')
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const current = works[index]
  const count = works.length
  const muted = index !== 0 || userMuted

  useEffect(() => {
    mutedRef.current = muted
  }, [muted])

  useEffect(() => {
    inactiveRef.current = inactive
  }, [inactive])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const node = document.createElement('video')
    node.muted = true
    node.playsInline = true
    node.preload = 'auto'
    preloadRef.current = node
    return () => {
      node.removeAttribute('src')
      node.load()
      preloadRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!count || !shouldLoad) return undefined
    const next = works[(index + 1) % count]
    const node = preloadRef.current
    if (node && next) {
      node.src = next
      node.load()
    }
  }, [index, count, shouldLoad])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !current || !shouldLoad) return undefined

    const clearWaiting = () => {
      clearTimeout(waitingTimer.current)
      setIsWaiting(false)
    }

    const setProgressUi = (ratio) => {
      const clamped = Math.min(1, Math.max(0, ratio))
      if (progressRef.current) {
        progressRef.current.value = String(Math.round(clamped * 1000))
        progressRef.current.style.setProperty('--progress', `${clamped * 100}%`)
      }
    }

    const resetProgress = () => {
      setProgressUi(0)
      if (timeRef.current) timeRef.current.textContent = '0:00'
    }

    const updateProgress = () => {
      if (!video.duration) return
      setProgressUi(video.currentTime / video.duration)
      if (timeRef.current) timeRef.current.textContent = formatTime(video.currentTime)
    }

    const onLoaded = () => {
      setDurationLabel(formatTime(video.duration))
      updateProgress()
      clearWaiting()
    }

    const onWaiting = () => {
      clearTimeout(waitingTimer.current)
      waitingTimer.current = setTimeout(() => setIsWaiting(true), 280)
    }

    const onPlaying = () => {
      failCount.current = 0
      clearWaiting()
      setIsPlaying(true)
    }

    const onPause = () => setIsPlaying(false)

    const onEnded = () => {
      wantsPlay.current = false
      setIsPlaying(false)
      video.currentTime = 0
    }

    const tryPlay = () => {
      if (!wantsPlay.current || inactiveRef.current || document.hidden) return
      if (!inViewRef.current && !fullscreenRef.current) return
      if (!video.paused) return
      video.muted = mutedRef.current
      video.play().catch(() => {
        video.muted = true
        if (index === 0) setUserMuted(true)
        video.play().catch(() => {})
      })
    }

    const onError = () => {
      failCount.current += 1
      if (failCount.current >= count) return
      setIndex((prev) => (prev + 1) % count)
    }

    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('canplay', tryPlay)
    video.addEventListener('timeupdate', updateProgress)
    video.addEventListener('waiting', onWaiting)
    video.addEventListener('playing', onPlaying)
    video.addEventListener('pause', onPause)
    video.addEventListener('ended', onEnded)
    video.addEventListener('error', onError)

    if (loadedSrcRef.current !== current) {
      loadedSrcRef.current = current
      resetProgress()
      setDurationLabel('0:00')
      video.src = current
      video.load()
    } else {
      tryPlay()
    }

    return () => {
      clearTimeout(waitingTimer.current)
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('canplay', tryPlay)
      video.removeEventListener('timeupdate', updateProgress)
      video.removeEventListener('waiting', onWaiting)
      video.removeEventListener('playing', onPlaying)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('ended', onEnded)
      video.removeEventListener('error', onError)
    }
  }, [current, count, shouldLoad])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = muted
  }, [muted])

  useEffect(() => {
    const frame = frameRef.current
    const video = videoRef.current
    if (!frame) return undefined

    const loadIo = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true)
      },
      { rootMargin: '400px 0px' }
    )

    const playIo = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.25
        inViewRef.current = visible
        if (!video) return
        if (!visible && !fullscreenRef.current) {
          video.pause()
          return
        }
        if (wantsPlay.current && !inactiveRef.current && video.paused) {
          video.play().catch(() => {})
        }
      },
      { threshold: [0, 0.25, 0.6] }
    )

    loadIo.observe(frame)
    playIo.observe(frame)
    return () => {
      loadIo.disconnect()
      playIo.disconnect()
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (inactive) {
      video.pause()
      return
    }
    if (wantsPlay.current && (inViewRef.current || fullscreenRef.current) && video.paused) {
      video.play().catch(() => {})
    }
  }, [inactive])

  useEffect(() => {
    const syncFullscreen = () => {
      const active = isFullscreenNode(frameRef.current) || isFullscreenNode(videoRef.current)
      fullscreenRef.current = active
      setIsFullscreen(active)
      if (active) inViewRef.current = true
    }

    document.addEventListener('fullscreenchange', syncFullscreen)
    document.addEventListener('webkitfullscreenchange', syncFullscreen)
    const video = videoRef.current
    video?.addEventListener('webkitbeginfullscreen', syncFullscreen)
    video?.addEventListener('webkitendfullscreen', syncFullscreen)
    return () => {
      document.removeEventListener('fullscreenchange', syncFullscreen)
      document.removeEventListener('webkitfullscreenchange', syncFullscreen)
      video?.removeEventListener('webkitbeginfullscreen', syncFullscreen)
      video?.removeEventListener('webkitendfullscreen', syncFullscreen)
    }
  }, [])

  useEffect(() => {
    const onVisibility = () => {
      const video = videoRef.current
      if (!video) return
      if (document.hidden) {
        video.pause()
        return
      }
      if (wantsPlay.current && (inViewRef.current || fullscreenRef.current) && !inactive && video.paused) {
        video.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [inactive])

  const playWithSound = async () => {
    const video = videoRef.current
    if (!video) return
    wantsPlay.current = true
    setHasStarted(true)
    video.muted = mutedRef.current
    try {
      await video.play()
      setIsPlaying(true)
    } catch {
      video.muted = true
      if (index === 0) setUserMuted(true)
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        wantsPlay.current = false
        setIsPlaying(false)
      }
    }
  }

  const goTo = (nextIndex, { autoplay = false } = {}) => {
    if (!count) return
    if (autoplay || wantsPlay.current) {
      wantsPlay.current = true
      setHasStarted(true)
    }
    setIndex((nextIndex + count) % count)
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      wantsPlay.current = false
      video.pause()
      return
    }
    playWithSound()
  }

  const toggleMute = () => {
    if (index !== 0) return
    const video = videoRef.current
    const next = !userMuted
    setUserMuted(next)
    if (video) video.muted = next
  }

  const toggleFullscreen = async () => {
    const frame = frameRef.current
    const video = videoRef.current
    if (!frame) return

    if (document.fullscreenElement || document.webkitFullscreenElement) {
      screen.orientation?.unlock?.()
      if (document.exitFullscreen) await document.exitFullscreen()
      else document.webkitExitFullscreen?.()
      return
    }

    try {
      if (frame.requestFullscreen) await frame.requestFullscreen()
      else if (frame.webkitRequestFullscreen) await frame.webkitRequestFullscreen()
      else video?.webkitEnterFullscreen?.()
      screen.orientation?.lock?.('portrait').catch(() => {})
    } catch {
      video?.webkitEnterFullscreen?.()
    }
  }

  const seek = (event) => {
    const video = videoRef.current
    const ratio = Number(event.currentTarget.value) / 1000
    event.currentTarget.style.setProperty('--progress', `${Math.min(1, Math.max(0, ratio)) * 100}%`)
    if (!video?.duration) return
    video.currentTime = ratio * video.duration
    if (timeRef.current) timeRef.current.textContent = formatTime(video.currentTime)
  }

  const onPlayerKeyDown = (event) => {
    if (event.target instanceof HTMLInputElement) return
    if (event.key === ' ') {
      event.preventDefault()
      togglePlay()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(index + 1, { autoplay: hasStarted })
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(index - 1, { autoplay: hasStarted })
    } else if (event.key === 'm' || event.key === 'M' || event.key === 'ь' || event.key === 'Ь') {
      toggleMute()
    } else if (event.key === 'f' || event.key === 'F' || event.key === 'а' || event.key === 'А') {
      event.preventDefault()
      toggleFullscreen()
    }
  }

  if (!count) return null

  return (
    <div className="flex flex-col items-center text-center">
      <motion.h2
        id="denniki-works-heading"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="text-2xl sm:text-3xl font-bold text-gray-900"
      >
        Наши работы
      </motion.h2>

      {count > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5 mb-6 sm:mb-8" aria-label="Выбор видео">
          {works.map((work, itemIndex) => {
            const active = itemIndex === index
            return (
              <button
                key={work}
                type="button"
                aria-label={`Видео ${itemIndex + 1} из ${count}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => goTo(itemIndex, { autoplay: hasStarted })}
                className={`h-2 rounded-full transition-[width,background-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062dd] focus-visible:ring-offset-2 ${
                  active ? 'w-7 bg-[#0062dd]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            )
          })}
        </div>
      )}

      <div
        ref={frameRef}
        tabIndex={0}
        onKeyDown={onPlayerKeyDown}
        className="denniki-player relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem] aspect-9/16 rounded-2xl overflow-hidden bg-gray-900 outline outline-1 outline-black/10 -outline-offset-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0062dd] focus-visible:ring-offset-2"
        aria-label={`Видео ${index + 1} из ${count}`}
      >
        <div className="denniki-player-stage">
        <video
          ref={videoRef}
          playsInline
          preload={shouldLoad ? 'auto' : 'none'}
          className="absolute inset-0 w-full h-full object-cover"
          onClick={togglePlay}
        />

        {isWaiting && (
          <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden bg-white/20 z-20" aria-hidden="true">
            <div className="denniki-indeterminate h-full w-1/3 bg-[#0062dd]" />
          </div>
        )}

        {!hasStarted && (
          <button
            type="button"
            onClick={playWithSound}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 focus-visible:outline-none"
            aria-label={`Смотреть видео ${index + 1}`}
          >
            <span className={`${playBtn} w-14 h-14`}>
              <Play className="translate-x-px" size={26} fill="currentColor" strokeWidth={0} />
            </span>
          </button>
        )}

        {hasStarted && !isPlaying && (
          <button
            type="button"
            onClick={playWithSound}
            className="absolute inset-0 z-20 flex items-center justify-center focus-visible:outline-none"
            aria-label="Продолжить воспроизведение"
          >
            <span className={`${playBtn} w-14 h-14`}>
              <Play className="translate-x-px" size={26} fill="currentColor" strokeWidth={0} />
            </span>
          </button>
        )}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                goTo(index - 1, { autoplay: hasStarted })
              }}
              className={`${navBtn} absolute left-3 top-1/2 z-30 -translate-y-1/2`}
              aria-label="Предыдущее видео"
            >
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                goTo(index + 1, { autoplay: hasStarted })
              }}
              className={`${navBtn} absolute right-3 top-1/2 z-30 -translate-y-1/2`}
              aria-label="Следующее видео"
            >
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          </>
        )}

        <div className="absolute inset-x-0 bottom-0 z-30 p-3">
          <div className="rounded-2xl bg-black/80 px-3 pt-3 pb-2.5">
            <label className="block mb-2.5" htmlFor="denniki-video-progress">
              <span className="sr-only">Положение видео</span>
              <input
                id="denniki-video-progress"
                ref={progressRef}
                type="range"
                min="0"
                max="1000"
                defaultValue="0"
                onInput={seek}
                className="denniki-progress"
              />
            </label>
            <div className="flex items-center gap-1.5 text-white">
              <button type="button" onClick={togglePlay} className={playBtn} aria-label={isPlaying ? 'Пауза' : 'Воспроизведение'}>
                {isPlaying ? (
                  <Pause size={18} fill="currentColor" strokeWidth={0} />
                ) : (
                  <Play className="translate-x-px" size={18} fill="currentColor" strokeWidth={0} />
                )}
              </button>
              {index === 0 && (
              <button type="button" onClick={toggleMute} className={iconBtn} aria-label={muted ? 'Включить звук' : 'Выключить звук'}>
                {muted ? <VolumeX size={18} strokeWidth={2} /> : <Volume2 size={18} strokeWidth={2} />}
              </button>
              )}
              <p className="ml-auto mr-1 text-xs tabular-nums text-white/90">
                <span ref={timeRef}>0:00</span>
                <span className="text-white/50"> / {durationLabel}</span>
              </p>
              <button
                type="button"
                onClick={toggleFullscreen}
                className={iconBtn}
                aria-label={isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
              >
                {isFullscreen ? <Minimize2 size={18} strokeWidth={2} /> : <Maximize2 size={18} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default DennikiWorks
