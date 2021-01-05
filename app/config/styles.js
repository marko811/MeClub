// global styles here

import { StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');

 const colors = {
    background: '#F5F2F9',
    errorText: '#FA3256',
    headerText: '#444444',
    buttonBackground: '#39BD98',
    buttonText: '#FFFFFF',
    inputBackground: '#FFFFFF',
    inputDivider: '#E4E2E5',
};
export default StyleSheet.create({
    headerLogoWrap: {
        flex: 1,
        alignItems: 'center',
    },
    headerLogo:{
        marginLeft: 10,
        width: 80,
        height: 74
    },
    header: {
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    container: {
        backgroundColor: '#00041a',
        flex: 1,
        width: null,
        height: null
    },
    headerTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'normal',
        fontSize: 18,
        flex: 3,
        alignItems: 'center'
    },
    headerTouchable: {
        flex:1,
        alignItems: 'flex-end'
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    textInput: {
        height: 38,
        borderColor: 'black',
        borderWidth: 2,
        color: '#333',
        paddingLeft: 10,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    faqQuestionBox: {
        backgroundColor: '#1a2255',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        marginBottom: 3,
    },
    faqQuestion: {
        fontSize: 16,
        color: '#fff'
    },
    faqAnswer: {
        fontSize: 16,
        color: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
    },
    mediaIconWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 7.5,
        paddingRight: 7.5,
    },

    albumViewPickerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    albumViewType: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777a81',
        paddingTop: 10,
        paddingBottom: 10,
    },
    active: {
        backgroundColor: '#fff',
    },
    indicator: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
        bottom: -20,
        transform: [{rotate: '180deg'}],
        position: 'absolute',
        zIndex: 100,
    },

    viewIcon: {
        width: 20,
        height: 20,
    },
    albumGridRow: {
        flexDirection: 'row'

    },
    albumGridItem: {
        width: window.width / 3,
        height: window.width / 3,
        flex: 1
    },
    albumItemDetail: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    albumItemActions: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    albumItemActionIcon: {
        flex: 1,

    },
    albumItemLikeCount: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16,
        color: '#000'
    },
    albumItemCaption: {
        color: "#000",
        fontSize: 16,
    },
    albumItemHash: {
        color: '#013667',
        fontSize: 16
    },
    albumItemPostTime: {
        opacity: .7,
        fontSize: 16,
    },
    topSearchWrap: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 50,
        justifyContent: 'center',
        backgroundColor: '#00072c'
    },
    chatCondensedInfo: {
        paddingVertical: 5,
        flexDirection: 'row',
        backgroundColor: '#1a2255',
        marginBottom: 3,
        justifyContent: 'center'
    },
    chatActivityIcon: {

        width : 50,
        height: 50,
    },
    chatAvatarWrap: {
        flex: 3,
        alignItems: 'center',
    },
    chatterName: {
        color: '#fff',
        fontSize: 12,
    },
    chatImage: {
        borderRadius: 50,
        width: 57.5,
        height: 57.5,
    },
    chatDetailsWrap: {
        flex: 5,
        justifyContent: 'center'
    },
    chatBadgeWrap: {
        flex: 2,
        alignItems: 'flex-end',
    },
    chatNextArrowWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    chatActivity: {
        color: '#fff',
        fontSize: 14
    },
    chatAttributes: {
        fontSize: 12,
        color: '#fff'
    },
    scrollContainer: {
        backgroundColor: '#00072c',
        paddingHorizontal: 30,
    },


})