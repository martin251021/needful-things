import { Link } from "react-router-dom";


export default function NavCategory({e}) {

    const styleLink = {
        textDecoration: "none"
    }

    const styleListItem = {
        listStyle: "none",
    }

    return(

        <Link to={`/categories/${e}`} style={styleLink}>
            <div className="navcategory-listitem">
            <li style={styleListItem}>
                {e[0].toUpperCase().concat("", e.slice(1))}
            </li>
            </div>
        </Link>
)
}