const Footer = () => {
  return (
    <div className="py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center bg-black pt-32">
        <h1 className="text-2xl font-bold">0:00</h1>
        <div className="flex gap-7">
            <a href="#void" className="hover:text-amber-600">Void</a>
            <a href="#senandika" className="hover:text-amber-600">Senandika</a>
            <a href="#ekspresi" className="hover:text-amber-600">Ekspresi</a>
            <a href="#ruang" className="hover:text-amber-600">Ruang</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="#" className="hover:text-amber-600">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="#" className="hover:text-amber-600">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#" className="hover:text-amber-600">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#" className="hover:text-amber-600">
                <i className="ri-twitter-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer