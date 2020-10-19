import { useRouter } from "next/router"
import React from "react"
import { loginUser } from "../../context/authState/AuthActions"
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider"
import Form from "../elements/Form"

const LoginPageContainer = () => {
  const dispatch = useAuthDispatch()
  const { isLoggedIn } = useAuthState()
  const router = useRouter()
  const [loginData, setLoginData] = React.useState<LoginFormData>({
    email: "",
    password: "",
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    loginUser(loginData)(dispatch)
    setLoginData({
      email: "",
      password: "",
    })
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      router.push("/stores")
    }
  }, [isLoggedIn])

  return (
    <Form
      className="sign-in-form"
      submitText="sign in"
      isLoginForm
      formData={loginData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
export default LoginPageContainer
