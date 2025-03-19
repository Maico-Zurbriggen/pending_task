export const Links = ({ urlLeft, textLeft }) => {
  return (
    <footer className="links">
      <a className="link" href={urlLeft}>{textLeft}</a>
    </footer>
  )
}