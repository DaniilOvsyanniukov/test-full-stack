import { useState } from 'react';
import "./InputForm.css";
import { useDispatch ,useSelector} from 'react-redux';
import operations from '../../redux/family/family-operations';
import selectors from '../../redux/family/family-selectors'

const InputForm = ({ active, setActive, inputOf, setInputOf, editMemberId}) => {
  const userId = useSelector(selectors.getUserId)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [parents, setParents] = useState("");

  const formsubmit = (e) => {
    let parentsSent = parents;
    if (!parents) {
      parentsSent = 'No Parents'
    }

    e.preventDefault();
    dispatch(operations.addMember({name, age, parents: parentsSent, owner: userId}))
    reset();
  };

  
  const editMember = (e) => {
    e.preventDefault();
    dispatch(operations.updateMember( editMemberId, { name, age, owner: userId }))
    reset();
  }

  const reset = () => {
    setName("");
    setAge("");
    setParents("")
    setActive(false)
    setInputOf(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "parents":
        setParents(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={active? "formBack active" : "formBack"} onClick={() => reset() }>
    <form onSubmit={inputOf? editMember : formsubmit} className='form' onClick={e => e.stopPropagation()}>
        <ul className='formInputList'>
          <li className='formInputItem'>
            <label className='label'>
              Name 
              <input
                className='input'
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="The name can only contain letters, an apostrophe, a dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                required
              />
            </label>
          </li>
          <li  className='formInputItem'>
            <label className='label'>
              Age
              <input
                className='input'
                type="tel" 
                name="age"
                value={age}
                onChange={handleInputChange}
                pattern="\d{1,4}"
                title="Enter your age in numbers"
                required
              /> 
            </label>
          </li>
          <li  className='formInputItem'>
            <label className='label'>
              Parents 
              <input
                className='input'
                type="tel"
                name="parents"
                value={parents}
                disabled={inputOf} 
                onChange={handleInputChange}
                title="Type names of your parents"
              />
            </label>
          </li>
        </ul> 
        <button
          className='button'
          type="submit">
        Submit
      </button>
      </form>
      </div>
  ) 

}

export default InputForm;