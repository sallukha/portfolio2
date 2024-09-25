import { Link } from "react-router-dom"

const NavBar = () => {

    const routingItems = [
        {
            link: "/",
            title: "Home"
        },
        {
            link: "/about",
            title: "About"
        }, {
            link: "/contact",
            title: "Contact"
        }, {
            link: "/projects",
            title: "projects"
        }, {
            link: "/skills",
            title: "Skills"
        }

    ]

    return (
        <div className="flex border justify-center items-center p-4 bg-gray-800">
 
            <ul className="flex gap-4 justify-center items-center">
                {
                    routingItems.map((item, index) => {
                        return (
                            <Link to={item.link} key={index}>
                                <li className="text-white font-bold">{item.title}</li>
                            </Link>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default NavBar
