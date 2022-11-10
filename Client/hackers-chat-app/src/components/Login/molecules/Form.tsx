type FormProps = {
    children: any,
    onSubmit?: any,
    className?: string
}
 const Form = ({children, onSubmit, className} : FormProps)=> {
  return (
   <form className={className} onSubmit={onSubmit}>
    {children}
   </form>
  )
}



export default Form