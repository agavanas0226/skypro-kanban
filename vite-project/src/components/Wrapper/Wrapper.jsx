import { WrapperHat } from "../Wrapper/Wrapper.styled"

function Wrapper({children}){
    return(
        <WrapperHat>
            {children}
		
        </WrapperHat>
    )
}
export default Wrapper