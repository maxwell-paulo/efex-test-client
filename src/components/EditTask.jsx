import { useState } from "react";
import { api } from "../api/api";
import { connect } from "react-redux";

function EditTask({ taskId, onClose }) {
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleEdit = async () => {
    try {
      await api.patch(
        `/task/${taskId}`,
        {
          name: editedName,
          description: editedDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Editar Tarefa</h2>
      <label htmlFor="editedName">Nome:</label>
      <input
        type="text"
        id="editedName"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <label htmlFor="editedDescription">Descrição:</label>
      <textarea
        id="editedDescription"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <button onClick={handleEdit}>Salvar Edições</button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(EditTask);
