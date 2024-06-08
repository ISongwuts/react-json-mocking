

type Props = {
    title: string
}

const Titile = (props: Props) => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-white'>{props.title}</h1>
    </div>
  )
}

export default Titile