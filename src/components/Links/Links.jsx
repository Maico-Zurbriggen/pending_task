export const Links = ({ urlLeft, textLeft, urlRight, textRight }) => {
  return (
    <footer className="links">
      <a href={urlLeft}>{textLeft}</a>
      <a href={urlRight}>{textRight}</a>
    </footer>
  )
}