import React, { useState, useRef, useContext } from 'react'
import { sendForm } from '../../firebase/client'
import TranslationContext from '../../TraslationContext'
import verificacion from '../../icons/icons8-marca-de-verificacion.svg'
import { buttonPrimary } from '../util/classButtons'

const Form = () => {
  const { text } = useContext(TranslationContext)
  const arrValidity = useRef([])
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    messages: ''
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  async function send(e) {
    e.preventDefault()
    sendForm(form).then((data) => {
      console.log(data)
    })
    setForm({ name: '', email: '', message: '' })
  }
  const errorDescription = {
    valueMissing: 'This field cannot be empty',
    typeMismatch: 'The field is incorrect'
  }

  const updateError = (value = '') => ({
    name: () => setErrors({ ...errors, name: value }),
    email: () => setErrors({ ...errors, email: value }),
    description: () => setErrors({ ...errors, messages: value })
  })

  const handleBlur = (e, index) => {
    const { validity, name } = e.target

    if (validity.valid) {
      arrValidity.current[index] = true
      updateError()[name]()
      console.log('oeuoeuoeu')
    } else {
      for (const value in errorDescription) {
        if (validity[value]) {
          const a = text.contact.errorDescription[value]

          updateError(a)[name]()
        }
      }
      arrValidity.current[index] = false
    }

    if (
      arrValidity.current.length === 3 &&
      arrValidity.current.indexOf(false) === -1
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  const classNameInputs =
    'p-1 pl-3 border-2 border-transparent focus:outline-none focus:border-b-2  focus:border-b-myDarkLightBlue/90 rounded bg-slate-900 placeholder-slate-600 w-full'

  return (
    <>
      <h3 className="text-slate-200 text-center pt-7  sm:text-4xl text-2xl animate-[startLeft_1.2s_ease-out]">
        {text.header.contact}
      </h3>
      <form
        onSubmit={(e) => send(e)}
        className=" flex flex-col m-auto items-center justify-center space-y-3 sm:text-lg text-base
         sm:w-96 w-[90%]  text-slate-200 last:items-end mt-7 animate-[startRight_1.2s_ease-out]"
      >
        {/* name */}
        <div className="relative w-full group ">
          <span className="text-xs text-right float-right text-rose-600 h-4 w-full">
            {errors.name}
          </span>
          <input
            type="text"
            name="name"
            maxLength={20}
            value={form.name}
            required
            onBlur={(e) => handleBlur(e, 0)}
            onChange={(text) => setForm({ ...form, name: text.target.value })}
            className={classNameInputs}
          />
          <span className="absolute top-6 left-2 opacity-80 transition duration-300">
            {text.contact.name}
          </span>
          {arrValidity.current[0] && (
            <span className="absolute top-6 right-2">
              <img src={verificacion} alt="" />
            </span>
          )}
        </div>
        {/* email */}
        <div className="relative w-full">
          <span className="text-xs text-right float-right text-rose-600 h-4 w-full">
            {errors.email}
          </span>
          <input
            type="email"
            name="email"
            required
            onBlur={(e) => handleBlur(e, 1)}
            value={form.email}
            onChange={(text) => setForm({ ...form, email: text.target.value })}
            className={classNameInputs}
          />
          <span className="absolute top-6 left-2 opacity-80 transition-all duration-300">
            {text.contact.email}
          </span>
          {arrValidity.current[1] && (
            <span className="absolute top-6 right-2 group-input:hover:text-red-200">
              <img src={verificacion} alt="" />
            </span>
          )}
        </div>
        {/* message */}
        <div className="relative w-full">
          <span className="text-xs text-right float-right text-rose-600 h-4 w-full">
            {errors.messages}
          </span>
          <textarea
            name="description"
            value={form.message}
            onBlur={(e) => handleBlur(e, 2)}
            onChange={(text) =>
              setForm({ ...form, message: text.target.value })
            }
            required
            className={classNameInputs}
            maxLength={300}
          />
          <span className="absolute top-6 left-2 opacity-80 transition-all duration-300">
            {text.contact.message}
          </span>
          {arrValidity.current[2] && (
            <span className="absolute top-6 right-2">
              <img src={verificacion} alt="" />
            </span>
          )}
        </div>
        <input
          type="submit"
          value={text.contact.submit}
          className={` relative inline-flex ${buttonPrimary}`}
          disabled={buttonDisabled}
        />
      </form>
    </>
  )
}

export default Form
