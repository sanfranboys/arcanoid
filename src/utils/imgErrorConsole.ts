const imgErrorConsole = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  // тут вся суть функции в том. что она выводит ошибку в консоль)
  /* eslint-disable-next-line */
  console.error('failure while image loading here:', event?.target)
}

export default imgErrorConsole
