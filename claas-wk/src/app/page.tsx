//import Student from './Student.jsx'
import Layout from './brides.jsx'
import MyCard from './myCard.jsx';

// function App(){
//   return(
//     <>
//     <Student name="chukwuebuka" age={30} isStudent={true}/>
//     </>
//   );
// };

function App(){
  return(
    <Layout>
    <MyCard 
    img="https://www.nairaland.com/attachments/14922704_naija44_jpegf6aee5b14f1fb1db4328d66b1ad3cc0b"
        name="Chioma"
        price="10.99"
        description="This is a beautiful babe from anambara state"
        size="200px"/>

        <MyCard 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5z6bYGTdDfYgsPjyixBDDRaQS_5i92sCb4Q&s"
        name="Titilope"
        price="25.99"
        description="This is a beautiful babe from lagos state"
        size="200px"/>
        </Layout>
  );
}


export default App;