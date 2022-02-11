import MemberCard from '../MemberCard/MemberCard';
import React, { useState } from 'react';
import s from './FamilyList.module.css'



const FamilyList = ({ membersList, openModal }) => {


  return (
      <ul className={s.accordion} >
          {[...membersList].map((member) => {
              return <li key={member._id} className={s.accordionItem}>
                  <MemberCard
                  memberName={member.name}
                  memberAge={member.age}
                  memberId={member._id}
                  openModal={openModal}
              />
              </li>
          })

          }
      </ul>
   
  );
}

export default FamilyList