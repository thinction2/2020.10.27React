import React from "react";
import useInputs from "./useInput";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const [name, nickname] = state;

  //   const [name, setName] = useState("");
  //   const [nickname, setNicname] = useState("");
  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   }, [name]);

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   const onChangeNicname = (e) => {
  //     setNicname(e.target.value);
  //   };

  return (
    <>
      <div>
        <input value={name} onChange={onChange} />
        <input value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </>
  );
};

export default Info;
