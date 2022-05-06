
import { Modal, Button } from 'antd';
import { Formik } from "formik";

const ModalItem = ({title, show, create, close, children }) => {


    return(
      <Modal
        title={title}
        visible={show}
        onOk={create} 
        onCancel={close}
      >
        {children}
      </Modal>
    )
}

export default ModalItem