/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
} from 'react-native';
class SweetAlert{

    static displayAccessDeniedAlert()
    {
        Alert.alert('توجه','شما دسترسی کافی برای انجام این کار ندارید');
    }
    static displaySimpleAlert(Title,Text)
    {
        console.log('displaying Alert:'+Title+":"+Text);
        Alert.alert(Title,Text);
    }
    static displayDeleteAlert(OnConfirmHandler)
    {

        Alert.alert('توجه','آیا مطمئن هستید که می خواهید این آیتم را حذف کنید؟',[
            {text:'بله',onPress:OnConfirmHandler},
            {text:'خیر'}
        ]);
    }
    static displayYesNoAlert(OnConfirmHandler,Title,Text)
    {

        Alert.alert(Title,Text,[
            {text:'بله',onPress:OnConfirmHandler},
            {text:'خیر'}
        ]);
    }
}

export default SweetAlert;
