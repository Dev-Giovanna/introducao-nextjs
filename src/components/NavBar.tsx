import Image from "next//image";

interface NavBarProps {
    links: {
      label: string;
      href: string;
    }[]
}

export default function NavBar({links}:NavBarProps) {

    return (
      <nav className="bg-amber-50 shadow-sm">
        <div className="px-4">
          <div className="flex justify-between h-16 items-center">
           
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/nextjs7685.logowik.webp"
                alt="logo next.js"
                width={40}
                height={40}
              />
              <span className="ml-2"> NextApp </span>
            </div>

            {/* Links */}
            <div className="flex space-x-6"> 
              {
                    links.map((link, indice)=>(
                      <a 
                      key={indice} 
                      href={link.href}
                      className=" text-lg
                           font-medium
                           hover:text-indigo-600"
                      >
                      


                          {link.label}
                      </a>
                    ))
              }
            </div>

          </div>
        </div>
      </nav>   
    )
}