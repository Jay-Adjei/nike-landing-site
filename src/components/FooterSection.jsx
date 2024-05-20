const FooterSection = ({title, links}) => {
  return (
    <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <ul>
            <li>{links.name}</li>
        </ul>
    </div>
  )
}

export default FooterSection