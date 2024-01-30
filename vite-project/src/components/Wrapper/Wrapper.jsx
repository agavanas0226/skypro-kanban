import { WrapperHat } from "../Card/Card.styled"

function Wrapper({children}){
    return(
        <WrapperHat>
            {children}
		
        </WrapperHat>
    )
}
export default Wrapper