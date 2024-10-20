import { IonButton, IonItem, IonList } from '@ionic/react';
import './ExploreContainer.css';
import ChoiceBtn from './buttons/ChoiceBtn';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <h2>Navegar para:</h2>
      <ChoiceBtn text="Opção 1" />
      <ChoiceBtn text="Opção 2" />
    </div>
  );
};

export default ExploreContainer;
