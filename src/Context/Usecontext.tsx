import {createContext, useContext, useState} from "react"


interface IUserContext {
    Visible: boolean;
    arrInfos:{}[];
    setarrInfos:React.Dispatch<React.SetStateAction<{}[]>>
  setIs_visible:React.Dispatch<React.SetStateAction<boolean>>
  
}

interface Props {
    children:React.ReactNode
}


export const TodoContext = createContext<IUserContext>({
    Visible: false,
    arrInfos:[],
    setarrInfos(){

    },
    setIs_visible(){

    }
});

export const TodoProvider = ({ children }:Props) => {


 const [Visible, setIs_visible] = useState(false)
 const [arrInfos, setarrInfos] = useState<{}[]>([])



return (
    <TodoContext.Provider value={{Visible, setIs_visible, arrInfos, setarrInfos}}>

{children}
    </TodoContext.Provider>
)

}

export const Usemycontext = ()=>useContext(TodoContext)