import { getHostEnvironment } from './extendscript/util/cep';

var color = require('color');

const getAppInfo = () => {
    const host = getHostEnvironment();
    const {
        appBarBackgroundColor: bar,
        panelBackgroundColor: panel,
        systemHighlightColor: highlight,
        baseFontSize,
        baseFontFamily
    } = host.appSkinInfo;

    return {
        colors: {
            bar: color
                .rgb(bar.color.red, bar.color.green, bar.color.blue)
                .hex(),
            panel: color
                .rgb(panel.color.red, panel.color.green, panel.color.blue)
                .hex(),
            highlight: color
                .rgb(highlight.red, highlight.green, highlight.blue)
                .hex()
        },
        font: {
            size: baseFontSize,
            family: baseFontFamily
        }
    };
};

export const getTheme = () => {
    const { colors, font } = getAppInfo();
    document.body.bgColor = colors.panel;

    return {
        colors: {
            background: colors.panel,
            highlight: colors.highlight,
            border: color(colors.panel)
                .darken(0.8)
                .hex(),
            input: color(colors.panel)
                .darken(0.4)
                .hex(),
            action: color(colors.panel)
                .negate()
                .hex()
        },
        font: {
            ...font,
            color: '#8a8a8a'
        }
    };
};

// csInterface.addEventListener(
//     CSInterface.THEME_COLOR_CHANGED_EVENT,
//     populateThemeFromJsx
// );
