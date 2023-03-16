type footerProps = {
  fullname: string
}

function Footer({fullname}: footerProps) {
  
  const initials = fullname.split(' ').map(word => word[0]).join('')
  
  return (
    <footer className="footer">
      <p className="footer__logo section__title">{initials}</p>
      <p className="footer__text section__text">{fullname} 2023</p>
    </footer>
  )
}

export default Footer