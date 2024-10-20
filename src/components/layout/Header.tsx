import { IonButton, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react"
import { menuOutline } from "ionicons/icons"

const Header = () => {
    return (
        <>
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Menu</IonTitle>
                    <IonMenuButton slot="end">
                        <IonIcon icon={menuOutline} size="large"></IonIcon>
                    </IonMenuButton>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">Conteúdo</IonContent>
        </IonMenu>
        <IonHeader id="main-content" className="ion-no-border">
            <IonToolbar>
                <IonMenuButton slot="start"  >
                </IonMenuButton>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        </>
    )
}

export default Header;