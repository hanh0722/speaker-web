import React, { FC } from "react";
import useInput from "../../../../../../hook/useInput";
import { ModalCoreProps } from "../../../../../../types/base";
import { isRequired } from "../../../../../../utils/string";
import { Button, Input, Modal } from "../../../../../core";

const CreateChatForm: FC<ModalCoreProps> = (props) => {
  const { onHide, show } = props;
  const {} = useInput(null, isRequired);
  return (
    <Modal center show={show || false} onHide={onHide}>
      <Modal.Header>Create Chat</Modal.Header>
      <Modal.Body>
        <div>
          <Input label="Recipients"/>
          <Input label="Message" />
          <Button variant="outlined" prefix="normal" color="success" fullWidth size="large">Create</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
};

export default CreateChatForm;
