import React from 'react';
import { Text, View, Image } from 'react-native';

interface PublicationProps {
    text: string;
    imageURL: string;
}

export default function Publication(props: PublicationProps) {
    return (
        <View>
            <Text>{props.text}</Text>
            <Image
                source={{
                    uri: props.imageURL
                }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
}
