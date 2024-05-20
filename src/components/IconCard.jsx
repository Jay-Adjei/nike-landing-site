const IconCard = ({logo}) => {
  return (
    <div className="p-1">
        <img src={logo.src} alt="" width={25} height={30}
        />
    </div>
  )
}

export default IconCard