import React, { useImperativeHandle, useRef } from "react";
import Form, { FormRef } from "./Form";

function App() {
  const formRef = useRef<FormRef>(null);

  function handleSubmit(){
    formRef.current?.submit()
  }
  
  return (
    <div className="App">
      <Form ref={formRef} />
    </div>
  );
}

export default App;
