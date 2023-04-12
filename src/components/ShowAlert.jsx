import { Alert } from "@material-tailwind/react";

export default function ShowAlert(status) {
    return (
        <>
            { status.status === true ? 
                <span>
                    <Alert className='-bg--error-color'>Tem palavras impróprias</Alert>
                </span>
            : status.status === false ? <span>
                    <Alert className=' -bg--sucess-color'>Tudo certo!</Alert>
                </span> : 
                <></>
            }
        </>
    )
}