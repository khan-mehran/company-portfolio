import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-slate">
        <div className=" py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-20 flex flex-col md:flex-row">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Company and Contact Details */}
            <div className="pe-5">
                <img
                    className="block h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                <p className="py-5">A platform was designed to address the immediate need to increase the visibility of qualified affordable tutors to parents.</p>
                <hr />
                <p className="pt-4">Email: info@example.com</p>
                <p className="py-2">Address, City</p>
                <p>Phone: 123-456-7890</p>
            </div>

            {/* Useful Links */}
            <div>
                <h4 className="text-lg font-bold mb-2">USEFUL LINKS</h4>
                <ul className="list-disc list-inside">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                </ul>
            </div>

            {/* Subscription and Social Icons */}
            <div>
                <h4 className="text-lg font-bold mb-2">SUBSCRIBE US</h4>
                <p>Get the latest news and updates.</p>
                <form className="mt-4">
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded" />
                <button type="submit" className="bg-primary text-white mt-3 border text-sm font-medium border-primary px-6 py-2 rounded transition-colors hover:bg-primaryLight hover:text-primary hover:border-primary">Subscribe</button>
                </form>
                <div className="mt-4">
                <a href="#" className="text-white mr-2"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-white mr-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white mr-2"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
    </footer>

  )
}

export default Footer