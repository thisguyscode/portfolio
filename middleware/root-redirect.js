export default function ({ redirect }) {
  if (process.BROWSER_BUILD) {
    document.scrollTop(0)
  }
  return redirect('/projects')
}
