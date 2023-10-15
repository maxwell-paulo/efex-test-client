import { useState } from "react";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  ModalBackground,
  ModalContent,
  ModalField,
  YesButton,
  NoButton,
  ToastContainer,
} from "./StyledComponents";

function EditTask({ taskId, onClose }) {
  const token = useSelector((state) => state.auth.token);
  const taskDetails = useSelector((state) => state.tasks.taskDetails);
  const initialName = taskDetails[taskId]?.name || "";
  const initialDescription = taskDetails[taskId]?.description || "daily task";

  const [editedName, setEditedName] = useState(initialName);
  const [editedDescription, setEditedDescription] =
    useState(initialDescription);

  const handleEdit = async () => {
    if (editedName.trim() === "") {
      toast(() => (
        <span>
          The name field cannot be empty.
          <ToastContainer>
            <YesButton onClick={() => toast.dismiss()}>CLOSE</YesButton>
          </ToastContainer>
        </span>
      ));
      return;
    }

    const taskUpdate = {
      name: editedName,
      description: editedDescription || "daily task",
    };

    try {
      await api.patch(`/task/${taskId}`, taskUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ModalField>
          <h2>EDIT TASK</h2>
        </ModalField>
        <ModalField>
          <label htmlFor="editedName">Name:</label>
          <input
            type="text"
            id="editedName"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </ModalField>
        <ModalField>
          <label htmlFor="editedDescription">Description:</label>
          <textarea
            id="editedDescription"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        </ModalField>
        <ModalField>
          <YesButton onClick={handleEdit}>SAVE</YesButton>
          <NoButton onClick={onClose}>CLOSE</NoButton>
        </ModalField>
      </ModalContent>
    </ModalBackground>
  );
}

export default EditTask;
