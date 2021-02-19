const fullScreenMode = (element: HTMLElement) => () => {
  if (!document.fullscreenElement) {
    element.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

export default fullScreenMode
