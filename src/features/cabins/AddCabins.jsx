import React from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabins() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add New Cabin{" "}
      </Button>
      {isOpenModal && (
        <Modal onClose={()=>setIsOpenModal(false)}  >
          <CreateCabinForm onClose={()=>setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddCabins;
