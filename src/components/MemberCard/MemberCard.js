import { useDispatch, useSelector} from 'react-redux';
import React, { useState } from 'react'
import operations from '../../redux/family/family-operations';
import selectors from '../../redux/family/family-selectors';
import FamilyList from '../FamilyList/FamilyList';
import s from './MemberCard.module.css'


const MemberCard = ({ memberName, memberAge, memberId , openModal}) => {
  const dispatch = useDispatch();
  const family = useSelector(selectors.getFamily)
  const [isActive, setIsActive] = useState(false);

  const findMyChild = () => {
    const myChilds = family.filter((member) => {
      const parents = member.parents.replace(/\s+/g, '').toLowerCase().split(",")
      const child = parents.find((parent) => {
        if(parent === memberName.replace(/\s+/g, '').toLowerCase()){return true} return false
      })
      if (child !== void 0) { return true } return false
    })
    return myChilds
    
  }
  
  const memberEdit = (e) => {
    e.stopPropagation()
    openModal(memberId)
  }

  const deleteMember = (e) => {
    e.stopPropagation()
    dispatch(operations.deleteMember({ memberId }))
  }
   
  return (
    <div className={s.itemContaoner} >
      <div className={s.itemCard} onClick={() => setIsActive(!isActive)}>
        <ul className={s.itemTextList}>
          <li className={s.itemTextList}>
            <p className={s.itemText}>Name: {memberName}</p>
          </li>
          <li className={s.itemTextList}>
            <p className={s.itemText}>Age: {memberAge}</p>
          </li>
        </ul>
        <ul className={s.itemButtonList}>
          <li className={s.itemButtonItem}>
            <button
              className={s.itemButton}
              type="button"
              onClick={memberEdit}
            > Edit </button>
          </li>
          <li className={s.itemButtonItem}>
            <button
              className={s.itemButton}
              type="button"
              onClick={deleteMember}
            > Delete </button>
          </li>
        </ul>
        <div>{findMyChild().length === 0? '': '+'}</div>
      </div>
        {isActive && findMyChild && <FamilyList membersList={findMyChild()} openModal={openModal} />}
    </div>
   
  );
}

export default MemberCard
