import { ContainerInput } from "./styles";

export default function TextInput(props) {
  return (
    <ContainerInput>
      <div className="input-group">
        {/* Associando o input com o label via for/id */}
        <input
          required={props.required ? true : false}
          type={props.pass ? 'password' : props.type ? props.type: 'text'}
          placeholder=" " /* Placeholder vazio para ativar :placeholder-shown */

          id={props.id || "text-input"} /* Id único para associar ao label */

          autoComplete="off"
          className="input"
          aria-label={props.label} /* Texto para tecnologias assistivas */
          onChange={(texto) => {
            props.onChangeText(texto.target.value);
          }}
        />
        <label className="user-label" htmlFor={props.name || "text-input"}>
          {props.label}
        </label>
      </div>
    </ContainerInput>
  );
}
