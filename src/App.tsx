import { useForm } from "react-hook-form"
import { FieldValues } from "react-hook-form/dist/types";

interface dataInitProps{
  cep: string  ,
  logradouro: string,
  complemento: string, 
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string,
} 

function App() {
  const dataInit: dataInitProps  = {
      cep: ""  ,
      logradouro: "",
      complemento: "", 
      bairro: "",
      localidade: "",
      uf: "",
      ibge: "",
      gia: "",
      ddd: "",
      siafi: "",
  }
  
  const {register, handleSubmit} = useForm();

  const onSubmit = (e: FieldValues) => {
    console.log(e)
  }


  const checkCep = (e: React.FormEvent<HTMLInputElement>) => {
    const cep = e.currentTarget.value.replace(/\D/g, '');
    console.log(cep)
  }

  

  return (
    <>
      <div>
        <h3>Buscar Cep</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            CEP:
            <input type="text" placeholder="00000000" maxLength={8} {...register("cep")} onBlur={checkCep} required/>
          </label>
        </form>
      </div>
    </>
  )
}

export default App
