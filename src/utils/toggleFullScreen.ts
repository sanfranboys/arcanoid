const toggleFullScreen = (element: HTMLElement) => () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    element.requestFullscreen()
  }
}

export default toggleFullScreen
