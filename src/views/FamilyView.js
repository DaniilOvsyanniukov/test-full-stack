import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from "react-redux";
import TitleList from "../components/TitleList/TitleList"
import InputForm from "../components/InputForm/InputForm";
import selectors from '../redux/family/family-selectors';
import s from './FamilyView.module.css'
import { initUserId } from '../redux/family/family-actions';
import operations from '../redux/family/family-operations';
import shortid from "shortid";

const FamilyView = () => {
  const dispatch = useDispatch();
  const userID = useSelector(selectors.getUserId);
  const memberList = useSelector(selectors.getFamily);
  const newId =  shortid.generate()
  const [showModal, setShowModal] = useState(false);
  const [inputOf, setInputOf] = useState(false);
  const [editMemberId, setEditMemberId] = useState("");



  useEffect(() => {
    if (!userID) {
      dispatch(initUserId({ newId }))   
    } else {
      console.log('запрос на сервер')
      dispatch(operations.fatchAllFamily(userID))
    }
  }, []);
  
  const activEditModal = (memberId) => {
    setShowModal(true)
    setInputOf(true)
    setEditMemberId(memberId)
  }

  const membersWithoutParents = () => {
    let members = []
    memberList.forEach((member) => {
      const parents = member.parents.replace(/\s+/g, '').toLowerCase().split(",")
      parents.forEach((parent) => {
        const noParentsInList = memberList.find((findParents) => {
          if (findParents.name.replace(/\s+/g, '').toLowerCase() === parent) { return true }
          return false
        })
        if (noParentsInList === void 0) {
          members.push(member)
          return
        }
      })
        
        return
    })
    return members
  }

    
  return (
    <div>
      <div className={s.header}>
        <h1 className={s.text}>Family Tree</h1>
        <button
        className={s.button}
              type="button"
              onClick={()=>setShowModal(true)}
        >Add Member</button>
      </div>
      
      {memberList? <TitleList membersList = { membersWithoutParents() } openModal = {activEditModal} />: null}
      <InputForm active={showModal} setActive={setShowModal} inputOf={inputOf} setInputOf={setInputOf} editMemberId={editMemberId}/>
    </div>
  );
}




export default FamilyView;
