const toggleFullScreen = (element: HTMLElement | null) => () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    element?.requestFullscreen()
  }
}

export default toggleFullScreen
