
import { useState } from 'react';

import { Modal, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import ModalItem from './ModalItem';


const AddItem = ({children, onClick , cancel}) => {

  return (
    <>
    <div style={{ paddingTop: '1rem', right: '3rem'  }}>
      <Button 
        type="primary" 
        icon={<UserAddOutlined />} 
        size="middle"
        onClick={() => { 
          onClick(true);
        }}
      >{children}
        {/* <ModalItem show={show}>
          {children}
        </ModalItem> */}
      </Button>
    </div>
    {/* <Modal
        title='Nuevo Personaje'
        visible={show}
        onOk={create}
        onCancel={cancel}
        okButtonProps={{ disabled: true }}
        cancelButtonProps={{ disabled: true }}
      >
        {children}
      </Modal> */}
    
  </>
  )
}

export default AddItem