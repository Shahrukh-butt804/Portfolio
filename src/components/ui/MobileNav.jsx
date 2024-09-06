import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

function MobileNav() {

  let links = [
    {
      name: "About",
      path: "/"

    },
    {
      name: "Projects",
      path: "/projects"

    },
    {
      name: "Contact",
      path: "/contact"

    },

  ]

  const pathName = usePathname()


  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-green-400 text-3xl lg:hidden block" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-20">
        <div className="font-bold text-2xl text-white relative top-10">
        MR BUTT <span className='text-green-500'>.</span>
        </div>


        {/* Mapping on Links */}
        <div className="flex flex-col gap-5  items-center h-screen">
          {/* links */}
          {links.map((e, index) => (
            <>
              <Link
                onClick={() => SheetClose()}
                href={e.path} key={index} className={`
                text-lg font-bold cursor-pointer text-white hover:text-green-400  hover:border-green-400 transition-all
               ${e.path === pathName && "text-green-300 border-b-2 border-green-400 "}
           `}>{e.name}</Link>
            </>
          ))}
        </div>

      </SheetContent>

    </Sheet>
  )
}

export default MobileNav
