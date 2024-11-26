import { ContainerInput } from "./styles";

// Interface para as props
interface TextInputProps {
  id?: string; // ID único para associar ao label
  name?: string; // Nome do input
  label: string; // Label do input
  type?: string; // Tipo do input (e.g., text, email, etc.)
  pass?: boolean; // Indica se o campo é do tipo senha
  required?: boolean; // Indica se o campo é obrigatório
  onChangeText: (value: string) => void; // Callback ao alterar o texto
}

export default function TextInput({ id, name, label, type, pass, required, onChangeText }: TextInputProps) {
  return (
    <ContainerInput>
      <div className="input-group">
        {/* Condicional para renderizar input ou textarea */}
        {type !== 'textarea' ? (
          <input
            required={required || false}
            type={pass ? "password" : type || "text"}
            placeholder=" " /* Placeholder vazio para ativar :placeholder-shown */
            id={id || "text-input"} /* Id único para associar ao label */
            autoComplete="off"
            className="input"
            aria-label={label} /* Texto para tecnologias assistivas */
            onChange={(e) => {
              onChangeText(e.target.value);
            }}
          />
        ) : (
          <textarea
            required={required || false}
            placeholder=" " /* Placeholder vazio para ativar :placeholder-shown */
            id={id || "text-input"} /* Id único para associar ao label */
            autoComplete="off"
            className="input"
            aria-label={label} /* Texto para tecnologias assistivas */
            onChange={(e) => {
              onChangeText(e.target.value);
            }}
          />
        )}
        <label className="user-label" htmlFor={name || "text-input"}>
          {label}
        </label>
      </div>
    </ContainerInput>
  );
}
