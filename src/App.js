import axios from "axios";
import { Field, Formik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AddItem from "./components/AddItem";
import CardItem from "./components/CardItem";
import ModalItem from "./components/ModalItem";

import Search from "./components/Search";

import { Modal, Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';


const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Section = styled.section`
  background-color: #eee;
  padding: 20px 25px;
  width: 90%;
  box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);
`;

export default function App() {
  const [data, setData] = useState([]);
  const [word, setSearch] = useState('');
  const [show, setShow] = useState(false)

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        const { results } = data;
        console.log("resultis", results);

        setData(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const showModal = () => {
    console.log('ShowModal', show);
    
    setShow(true);
    console.log('ShowModal 2', show);

  };

  const createItem = () => {
    console.log('Saved');

  }

  const closeModal = () => {
    setShow(false);
  }


  return (
    <Container>
      <Section>
        {/* <Formik
          initialValues={{
            search: ""
          }}
        > */}
          <Search label="Búsqueda" onChange={setSearch} />
          {/* <AddItem onClick={setShow}> 
            Agregar
          </AddItem> */}
        {/* </Formik> */}

        <Button 
          type="primary" 
          icon={<UserAddOutlined />} 
          size="middle"
          onClick={showModal}
        >Agregar
          {/* <ModalItem show={show}>
            {children}
          </ModalItem> */}
        </Button>

        {data.filter(item => item.name.includes(word))
          .map((item) => (
            <CardItem
              key={item.id}
              title={item.name}
              image={item.image}
              description={item.gender}
            />
          ))
        }
        <ModalItem title='Nuevo Usuario' show={show} create={createItem} close={closeModal}>
            <Formik
              initialValues={{
                name: ""
              }}
              onSubmit={createItem}
            >
            <Field placeholder='Name' label='Name' name='name' />
          </Formik> 
        </ModalItem>  
        



      </Section>
    </Container>
  );
}
