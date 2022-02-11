import MemberCard from '../MemberCard/MemberCard';
import s from './TitleList.module.css'



const TitleList = ({ membersList, openModal }) => {
  
  return (
      <ul className={s.accordion}>
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

export default TitleList