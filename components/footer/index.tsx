import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { FaStripeS, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import mercadoLibre from "../../images/footer/mercadoLibre.jpg";
import paypal from "../../images/footer/paypal.png";
import stripe from "../../images/footer/stripe.png";
// To fix "Cannot find module '../../images/footer/stripe.png' or its corresponding type declarations.ts(2307)" error
// I had to add the following line to the tsconfig.json file

function index() {
  return (
    <footer className="text-muted bg-firstNav mt-16 relative w-full">
      <>
        {/* My social Networks */}
        <section className="flex items-center gap-x-6 p-4 border-b border-gray-800">
          <span>Get connected with my social networks:</span>
          <a href="https://github.com/Lautaroef?tab=projects">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lautaro-figueroa-40451815a/">
            <BsLinkedin />
          </a>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Personal Information*/}

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-6">
                <Link href="/">
                  <Image
                    src="https://www.barlantravel.com/images/logo-white.png"
                    alt="Lausof.com"
                    className="w-32 customFirstNav mb-4"
                    width={200}
                    height={100}
                  />
                </Link>
                <p>
                  Bariloche, Argentina.
                  <br />
                  <BsFillTelephoneFill className="text-xs inline" />
                  +54 000 0000000
                  <br />
                  <GoMail className="text-xs inline" /> jhondoe@gmail.com <br />
                </p>
              </div>

              {/* About us */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-bold mb-4">About Us</h6>
                <p>
                  <Link href="/" className="block">
                    Home
                  </Link>
                  <Link href="/about" className="block">
                    About us
                  </Link>
                  <Link href="/" className="block">
                    News
                  </Link>
                  <Link href="/contact" className="block">
                    Contact
                  </Link>
                </p>
              </div>

              {/* Useful Links*/}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <a href="#!" className="text-reset block">
                  Pricing
                </a>
                <a href="#!" className="text-reset block">
                  Settings
                </a>
                <a href="#!" className="text-reset block">
                  Orders
                </a>
                <a href="#!" className="text-reset block">
                  Help
                </a>
              </div>

              {/* Payment Methods */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Payment Methods</h6>
                <Image src={mercadoLibre} alt="Mercado libre" className="w-28" />
                <Image src={paypal} alt="PayPal" className="w-28" />
                <div className="flex mt-1.5">
                  <FaStripeS className="text-2xl" />
                  <Image src={stripe} alt="Stripe" className="w-16 ml-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright © */}
        <div
          className="text-center p-4 text-sm"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.05)` }}
        >
          Site Developed by Friedman Software ©
        </div>
      </>
    </footer>
  );
}

export default index;
