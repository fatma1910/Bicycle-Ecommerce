import Link from "next/link"

const ErrorPage = () => {
  return (
    <section className='py-72'>
    <div className='container mx-auto'>
      <h3 className='text-center mb-4'>
        Something went wrong!
      </h3>
      <Link href='/'>
        <button className='btn btn-primary mx-auto'>Back to the home page</button>
      </Link>
    </div>
  </section>
  )
}

export default ErrorPage