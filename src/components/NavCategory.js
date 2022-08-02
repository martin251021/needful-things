import { Link } from "react-router-dom"

export default function NavCategory({e}) {

    const styleLink = {
        textDecoration: "none"
    }

    const styleListItem = {
        listStyle: "none",
    }

    return(

        <Link to={`/categories/${e}`} style={styleLink}>
            <li style={styleListItem}>
                {e}
            </li>
        </Link>
)
}