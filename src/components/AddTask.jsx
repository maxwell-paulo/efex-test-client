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

function AddTask({ onClose }) {
  const token = useSelector((state) => state.auth.token);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (name.trim() === "") {
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
      name: name,
      description: description || "daily task",
    };

    try {
      await api.post(`/task`, taskUpdate, {
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
          <h2>ADD TASK</h2>
        </ModalField>
        <ModalField>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </ModalField>
        <ModalField>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </ModalField>
        <ModalField>
          <YesButton onClick={handleAdd}>ADD</YesButton>
          <NoButton onClick={onClose}>CLOSE</NoButton>
        </ModalField>
      </ModalContent>
    </ModalBackground>
  );
}

export default AddTask;
