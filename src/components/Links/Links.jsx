export const Links = ({ urlLeft, textLeft, urlRight, textRight }) => {
  return (
    <>
      <a className="link" href={urlLeft}>{textLeft}</a>
      <a className="link" href={urlRight}>{textRight}</a>
    </>
  )
}