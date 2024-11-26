import React, { useState, useEffect } from "react";
import {
  ModalBackground,
  ModalContainer,
  ModalContainerHeader,
} from "./styles";
import TextInput from "../TextInput";

// Tipo para o JSON que será passado (pode ser ajustado conforme necessário)
interface Json {
  taskDate?: string; // Data da tarefa
  completionDate?: string; // Data de conclusão
  observation?: string; // Observação
}

interface ModalProps {
  visible?: boolean; // Define se o modal está visível ou não
  onClose: () => void; // Callback para fechar o modal
  data?: Json; // Dados que podem ser passados para o modal
}

export default function Modal({ visible, onClose, data }: ModalProps) {
  if (!visible) return null; // Não renderiza o modal se `visible` for falso

  const [obs, setObs] = useState(data?.observation || ""); // Inicializa com a observação, se houver
  const [date, setDate] = useState(data?.taskDate || ""); // Inicializa com a data da tarefa, se houver
  const [completionDate, setCompletionDate] = useState(data?.completionDate || ""); // Inicializa com a data de conclusão, se houver

  // Atualiza o estado com base nos dados quando o componente for montado
  useEffect(() => {
    if (data) {
      setObs(data.observation || "");
      setDate(data.taskDate || "");
      setCompletionDate(data.completionDate || "");
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode lidar com a submissão dos dados, como enviar para uma API ou atualizá-los no estado pai
    console.log("Dados enviados:", { obs, date, completionDate });
    onClose(); // Fecha o modal após o envio
  };

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalContainerHeader>
          <h1>Título</h1>
          <button onClick={onClose}>X</button>
        </ModalContainerHeader>
        <form action="" method="get" onSubmit={handleSubmit}>
          <div className="dates">
            <TextInput
              label="Data da tarefa"
              onChangeText={setDate}
              type="date"
            
              required
            />
            <TextInput
              label="Data de conclusão"
              onChangeText={setCompletionDate}
              type="date"
            
            />
          </div>
          <TextInput
            id="max-height"
            label="Observação"
            onChangeText={setObs}
            type="textarea"
            
            required
          />
          <button type="submit" id="btnSubmit">
            Confirmar alterações
          </button>
        </form>
      </ModalContainer>
    </ModalBackground>
  );
}
