import styles from '../styles/message.module.scss'
type MessageProps = {
    message: string | number,
    className: string
}
const Message = ({message}: MessageProps) => {
  return (
    <div className={styles.container}>
        {message}
    </div>
  )
}

export default Message