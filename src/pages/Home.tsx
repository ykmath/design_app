import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={'dark'}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aplicativo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
