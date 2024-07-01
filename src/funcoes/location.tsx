import { useLocation } from "react-router-dom"

export const LocationPathnameReturn = (): string|null => {
    const location = useLocation()
    return location.pathname.split("/")[1]
}