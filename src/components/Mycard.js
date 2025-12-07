import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper'
import MyBoton from './MyBoton'



const Mycard = ({ title, subtitle, text, icon }) => {
    const LeftContent = props => <Avatar.Icon {...props} icon={icon} />
    return (
        <Card style={{ margin: 10 }}>
            <Card.Title
                title={title}
                subtitle={subtitle}
                left={LeftContent}
                icon={icon} />
            <Card.Content>
                <Text variant="titleLarge">{text}</Text>
            </Card.Content>
            <Card.Actions>
                <MyBoton
                    icon={"camera"}
                    text={"Foto"}
                />
                <MyBoton
                    icon={"heart"}
                    text={"Me gusta"}
                />

            </Card.Actions>
        </Card>
    )
}

export default Mycard