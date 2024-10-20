import { IonButton, IonLabel } from "@ionic/react"

interface IProps {
    text: string
}

const ChoiceBtn: React.FC<IProps> = ({text}) => {
    return (
        <IonButton expand="block">
            <IonLabel color="dark">{text}</IonLabel>
        </IonButton>
    )
}

export default ChoiceBtn;