type DescriptionProps = {
    displayName: string,
    description: string
}

const Description = ({displayName, description}: DescriptionProps) => {
  return (
    <div>
        <h2>{displayName}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Description