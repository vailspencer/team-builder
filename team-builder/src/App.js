import React, { useState } from 'react';
import './App.css';
import TeamMember from './Components/TeamMember.jsx'
import TeamForm from './Components/Form/TeamForm.jsx'


function App() {
  // starter values  
  const [teamMembers, setTeamMembers] = useState([{
  id:1,
  name: 'Spencer',
  email: 'vail.spencer@gmail.com',
  role:'Frontend Engineer'
  }]);

  //structure for applying a card for a new member 
  const addMember = card => {
    const newCard = {
      id:Date.now(),
      name:card.name,
      email:card.email,
      role:card.role
    };
    //Copy Card 
    setTeamMembers([...teamMembers, newCard]);

  }

  

  return (
    <div className ='App'>
      <h2>A  Very Nice Form</h2>
      <TeamForm addMember={addMember} />
      <TeamMember teamMembers={teamMembers} />
    </div>
  );
}

export default App;
