// Write your code here
import {useState} from 'react'
import {
  PasswordValidatorContainer,
  PasswordCardContainer,
  CardHeader,
  CardDescription,
  PasswordEl,
  ErrorEl,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const errorMsg =
    password.length < 8 ? 'Your password must be at least 8 characters' : ''

  return (
    <PasswordValidatorContainer>
      <PasswordCardContainer>
        <CardHeader>Password Validator</CardHeader>
        <CardDescription>
          Check how strong and secure is your password
        </CardDescription>
        <PasswordEl type="password" onChange={onChangePassword} />
        <ErrorEl>{errorMsg}</ErrorEl>
      </PasswordCardContainer>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
