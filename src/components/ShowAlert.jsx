import { Alert } from "@material-tailwind/react";

export default function ShowAlert({status, amount}) {
    console.log(amount)
    console.log(status)
    return (
        <>
            { status === true ? 
                <span>
                    <Alert className='-bg--error-color'>
                        <div className="w-full flex flex-row justify-between text-sm">
                            <p>Ops! Existe palavras inapropriadas!</p>
                            <p className=" text-red-900 font-bold">
                                {amount} 
                            </p>
                        </div>
                    </Alert>
                </span>
            : status === false ? <span>
                    <Alert className=' -bg--sucess-color'>
                        Tudo certo!
                    </Alert>
                </span> : 
                <></>
            }
        </>
    )
}