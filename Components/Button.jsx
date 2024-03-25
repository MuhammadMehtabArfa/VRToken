import Image from "next/image";

const Button = ({type,icon,title,color}) => {
  return (
    <div>
      
      <button className={`flexCenter gap-3 rounded border ${color}` } type={type}>
        {icon && <Image  src={icon} alt={title} width={24} height={24}/> }
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    
    </div>
  )
}

export default Button