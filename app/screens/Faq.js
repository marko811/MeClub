import React, { Component } from "react";

import {View, Image, Text, ScrollView} from 'react-native';
import Styles  from '../config/styles';
const questions = [
    {
        'q' : "Why is it called MeClub?",
        'a' : "We are building a platform that takes the best ingredients from a traditional “club”, a protected place that like-minded people go to and find their favorite activity - and the appropriate activity partner - in less than 30 seconds. There is no “socializing”, no digging for relevant information between thousands of pieces of irrelevant digital data. It's really simple. You come here, and you'll find what you need.",
    },{
        "q" : "Where is MeClub active?",
        "a" : "Our current focus are the coastal areas between Los Angeles and San Diego. However, the platform is set up to work globally.",
    },{
        "q" : "Default view of map",
        "a" : "When you open the app, the map shows all activities happening right now within a certain perimeter of your current location.",
    },{
        "q" : "How do I change location?",
        "a" : "You can type in any public site, city, country in the address bar on top. Click ENTER and the map will display activities in your preferred location.",
    },{
        "q" : "How can I find my favorite activity?",
        "a" : "We are currently supporting activities that are typical for high schools and colleges. Simply move the map around or type in your preferred location and click on any of the activity mini icons displayed on the map.",
    },{
        "q" : "How can find activities in the future?",
        "a" : "Move the red time circle around the map with your finger in any direction and activities will be displayed on the map.",
    },{
        "q" : "What are the activity icons on the map?",
        "a" : "Each icon represents an activity posted by a MeClub member.",
    },{
        "q" : "How do I find more about a posted activity?",
        "a" : "Click on any dot on the map and an information window will be displayed.",
    },{
        "q" : "How do I post an activity?",
        "a" : "Click the \"Create Activity\" button on the main page and select the details of your event.",
    },{
        "q" : "Can I invite myself to an activity another person has posted?",
        "a" : "No. Only the host can invite you to join the event after you both communicated via chat.",
    },{
        "q" : "How can I accept another person for my event?",
        "a" : "The other person must contact you, the host, via chat message first. After you become familiar and comfortable with that person, you can click the “Invite” button within the chat area. At that moment, your event will be imported into your and the other person’s phone calendar.",
    },{
        "q" : "How often can I rate a person?",
        "a" : "You can rate a person one time per activity.",
    },{
        "q" : "What kind of events can I post?",
        "a" : "All events are automatically posted as “open events”, which means you can also share it with your contacts outside of the app. People then can indicate an interest in joining your event without having to download the app.",
    },{
        "q" : "How can I still join an activity that has been planned already?",
        "a" : "A message lets you know that this event is already planned. But you can still chat with the host to find out more information.",
    },{
        "q" : "Who can rate me?",
        "a" : "Only the person you agreed to do an activity with can rate you.",
    },{
        "q" : "What is the purpose of the large activity icons underneath the map?",
        "a" : "Clicking on any of the large activity icons filters down the mini icons on the map to just one type of activity.",
    },{
        "q" : "How do I find out more about a posted activity?",
        "a" : "Click on any of the icons on the map.",
    },{
        "q" : "How can I still join an activity that has been planned already?",
        "a" : "When the host has accepted a partner, it will say “Event Closed” in the chat environment. But you can still chat with the host and find out more.",
    },{
        "q" : "When can I rate a person?",
        "a" : "You can rate a person on the day of the event date or later under “My Agenda”.",
    },
];
export default class FaqScreen extends Component {

    state = {
        'questions' : questions
    };


    render() {

        return (
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <View style={Styles.headerLogoWrap}>
                        <Image source={require('../assets/meclub-logo-small.png')} style={Styles.headerLogo} />
                    </View>
                    <Text style={Styles.headerTitle}>FAQ</Text>
                    <View style={Styles.headerTouchable} />
                </View>
                <ScrollView>
                    {
                        this.state.questions.map((faq,i) => {
                            return (
                                <View key={i}>
                                    <View style={Styles.faqQuestionBox}>
                                        <Text style={Styles.faqQuestion}>{faq.q}</Text>
                                    </View>
                                    <View>
                                        <Text style={Styles.faqAnswer}>{faq.a}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
