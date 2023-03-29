import { useState } from "react";
import axios from "axios";

interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function MyComponent() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState<CepData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleCepSearch = async () => {
    try {
      const response = await axios.get<CepData>(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      setCepData(response.data);
      setError(null);
    } catch (error) {
      setCepData(null);
      setError("CEP inválido. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <input type="text" value={cep} onChange={handleCepChange} />
      <button onClick={handleCepSearch}>Buscar CEP</button>
      {error && <div>{error}</div>}
      {cepData && (
        <div>
          <p>CEP: {cepData.cep}</p>
          <p>Logradouro: {cepData.logradouro}</p>
          <p>Complemento: {cepData.complemento}</p>
          <p>Bairro: {cepData.bairro}</p>
          <p>Localidade: {cepData.localidade}</p>
          <p>UF: {cepData.uf}</p>
        </div>
      )}
    </div>
  );
}