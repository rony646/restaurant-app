import React from 'react';

import { View, Text } from 'react-native';
import { useAppSelector } from '../../redux/hooks';

const CartScreen: React.FC = () => {

    const cartItems = useAppSelector((state) => state.items);

    return(
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Text>Cart Screen</Text>
            {cartItems.map(meal => {
                return(
                    <View>
                        <Text>{meal.title}</Text><Text>{meal.price}</Text>
                    </View>
                )
            })}
        </View>
    )
};

export default CartScreen;