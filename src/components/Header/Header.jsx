import '/src/components/Header/Header.css'
import Logo from "./Logo/Logo.jsx";
import Search from "./Search/Search.jsx";
import LoginOrSignUp from "./LoginOrSignUp/LoginOrSignUp.jsx";

export default function Header(){
    return(
        <div className={'header'}>
            <Logo />
            <Search />
            <LoginOrSignUp />
        </div>
    )
}