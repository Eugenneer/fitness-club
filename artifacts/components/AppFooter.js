import React from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { MODES } from "../constants";
const AppFooter = ({ mode = MODES.DAILYLIST, setMode = (el) => { el; } }) => (React.createElement(Footer, null,
    React.createElement(FooterTab, null,
        React.createElement(Button, { badge: true, vertical: true, active: mode === MODES.DAILYLIST, onPress: () => setMode(MODES.DAILYLIST) },
            React.createElement(Badge, null,
                React.createElement(Text, null, "2")),
            React.createElement(Icon, { name: "apps" })),
        React.createElement(Button, { vertical: true, active: mode === MODES.CAMERA, onPress: () => setMode(MODES.CAMERA) },
            React.createElement(Icon, { name: "camera" })),
        React.createElement(Button, { badge: true, vertical: true, active: mode === MODES.NAVIGATE, onPress: () => setMode(MODES.NAVIGATE) },
            React.createElement(Badge, null,
                React.createElement(Text, null, "51")),
            React.createElement(Icon, { active: true, name: "navigate" })),
        React.createElement(Button, { vertical: true, active: mode === MODES.PERSON, onPress: () => setMode(MODES.PERSON) },
            React.createElement(Icon, { name: "person" })))));
export default AppFooter;
//# sourceMappingURL=AppFooter.js.map