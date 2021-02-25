import {BiLogIn} from 'react-icons/bi'
import {BiLogOut} from 'react-icons/bi'
import {FaQuoteLeft} from 'react-icons/fa'
import {BiHelpCircle} from 'react-icons/bi'
export const properties = [
    {
        
        elements_icons: <BiLogIn/>,
        text:"Sign In",
        path:'/signin'
    },
    {
        elements_icons: <BiLogOut/>,
        text:"Sign Up",
        path:'/signup'
    },
    {
        elements_icons: <FaQuoteLeft/>,
        text:"faq",
        path:'/faq'
    },
    {
        elements_icons: <BiHelpCircle/>,
        text:"Help Center",
        path:'https://help.git-sa.net/'
    }

]