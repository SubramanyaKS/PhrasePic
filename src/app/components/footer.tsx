import React from 'react'

const Footer = () => {
  return (
  <footer className="relative z-10 bg-[#09080f] border-t border-white/[0.06] px-5 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-gray-600 sm:flex-row">

          <p>
            © {new Date().getFullYear()} PhrasePic
          </p>

          <p>
            Developed by{" "}
            <span className="text-pink-500">
              Subramanya
            </span>
          </p>

        </div>

      </footer>

  )
}
export default Footer