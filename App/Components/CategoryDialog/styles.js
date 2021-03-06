import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../Themes/index'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    mainContainer: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: Colors.promptBackground
    },
    innerContainer: {
        height: 400,
        width: Metrics.screenWidth - 40,
        marginTop: Metrics.marginThirty,
        borderRadius: Metrics.marginFifteen,
        backgroundColor: Colors.primaryColorI,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Metrics.baseMargin,
    },
    heading: {
        flex: 1,
        color: Colors.snow,
        textAlign: 'center',
        fontSize: Fonts.size.input,
        fontFamily: Fonts.type.bold
    },
    inputContainer: {
        borderBottomColor: 'transparent'
    },
    inputLabel: {
        color: Colors.black,
        fontFamily: Fonts.type.bold
    },
    closeIcon: {
        fontSize: 25,
        color: Colors.snow,
        padding: Metrics.baseMargin,
    },
    bottomLine: {
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.offWhiteI
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.snow,
        padding: Metrics.baseMargin
    },
    amountLabel: {
        color: Colors.offWhiteI,
        marginTop: Metrics.baseMargin
    },
    budgetContainer: {
        flexDirection: 'row'
    },
    currency: {
        width: 40,
        borderBottomWidth: 1.5,
        marginRight: Metrics.baseMargin,
        borderBottomColor: Colors.offWhiteI
    },
    currencyText: {
        textAlign: 'center',
        fontFamily: Fonts.type.bold
    },
    amountInput: {
        flex: 1,
        borderBottomWidth: 1.5,
        marginRight: Metrics.baseMargin,
        borderBottomColor: Colors.offWhiteI
    },
    buttonContainer: {
        margin: Metrics.marginFifteen
    }
})
