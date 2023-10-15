import { useState } from "react";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  ModalBackground,
  InfoModalContent,
  InfoModalField,
  YesButton,
  NoButton,
  ToastContainer,
  InfoModalP,
} from "./StyledComponents";

function InfoModal({ onClose }) {
  return (
    <ModalBackground>
      <InfoModalContent>
        <InfoModalField>
          <h2>Project Infos</h2>
        </InfoModalField>
        <InfoModalField>
          <InfoModalP>
            This application is a code test where I was able to put into
            practice my knowledge of SQL, Node, Express.js and React.js. If you
            don't want to create a user, you can use the access below to test
            all the features.
          </InfoModalP>
        </InfoModalField>
        <InfoModalField>
          <InfoModalP>email: admin@admin.com</InfoModalP>
        </InfoModalField>
        <InfoModalField>
          <InfoModalP>password: S@fepass123</InfoModalP>
        </InfoModalField>
        <InfoModalField>
          <NoButton onClick={onClose}>CLOSE</NoButton>
        </InfoModalField>
      </InfoModalContent>
    </ModalBackground>
  );
}

export default InfoModal;
