import { useField } from "formik";
// import styled from 'styled-components'
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// const Control = styled.div`
//   margin-bottom: 20px
// `

// const Label = styled.label`
//   color: #000;
//   display: block;
//   margin-bottom: 5px;
// `

// const MyInput = styled.input`
//   outline: none;
//   padding: 8px;
//   border: solid 1px #b1b3b5;
//   border-radius: 4px;
//   width: 100%;
//   margin-bottom: 5px;
// `

// const ErrorMessage = styled.div`
//   color: #f00;
// `

/* const Search = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return(
    <Control>
      <Label> {label} </Label>
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage> {meta.error} </ErrorMessage>
      ): null}
    </Control>
  )
}  */

const Search = ({ label, onChange, ...props }) => {
  // const [field, meta] = useField(props);
  return (
    <Space direction="vertical" style={{ width: "80%" }}>
      <Input
        onChange={(e) =>onChange(e.target.value) }
        addonAfter={<SearchOutlined />}
        defaultValue="mysite"
      />
    </Space>
  );
};

export default Search;
