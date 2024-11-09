import { useContext } from "react"
import { TodoContext } from "../Provider/TodoProvider"

export const useTodo = () => {
    return useContext(TodoContext)
}
