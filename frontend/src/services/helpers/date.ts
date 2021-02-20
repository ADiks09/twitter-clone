export const parseDateForPost = (date: Date): string => {
  const dateNow = new Date(Date.now())
  const datePost = new Date(date)

  if (dateNow.getMonth() !== datePost.getMonth())
    return datePost.toLocaleDateString()

  const day = dateNow.getDate() - datePost.getDate()

  return day === 0 ? 'today' : `${day} day ago`
}
