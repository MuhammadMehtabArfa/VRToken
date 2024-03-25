import Image from "next/image";

const Button = ({type,icon,title,style}) => {
  return (
    <div>
      
      <button className={`flex Center gap-3 rounded border  ${style} cursor-pointer` } type={type}>
        {icon && <Image  src={icon} alt={title} width={24} height={24}/> }
        {title}
      </button>
    
    </div>
  )
}

export default Button