import styles from '../styles/form_input.module.scss'

type InputProps = {
   
    type: string,
    placeHolder: string,
}

const FormInput = ({type, placeHolder}: InputProps) => {
  return (
    <input 
    className={styles.input}
    type={type}
    placeholder={placeHolder}
  />
  )
}

export default FormInput