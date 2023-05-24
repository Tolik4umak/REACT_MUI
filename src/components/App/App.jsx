import { Button, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import Field from '../../UI/Field/Field';
import { ExpandMore } from '@mui/icons-material'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Test from '../Test/Test';
import Footer from '../Footer/Footer';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';

function App() {
  return (
    <div >
      
      <Nav/>
      <Main/>
      <CardList/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;
